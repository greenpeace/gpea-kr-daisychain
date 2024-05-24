import React, { useEffect } from 'react';
import Wrapper from '@containers/wrapper';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useRouter } from 'next/router';
import { connect, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as themeActions from 'store/actions/action-types/theme-actions';
import * as formActions from 'store/actions/action-types/form-actions';
import * as statusActions from 'store/actions/action-types/status-actions';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';
import {
  initTagManager,
  pushToDataLayer,
  pushToDataLayerGA4
} from '@common/components/TrackingUtils';

/* Determine the returned project index by env variable */
const DynamicComponent = dynamic(() => import(`apps`), {
  loading: () => <p>loading</p>,
});

/* Get env variables */
const envProjectName = process.env.projectName;
const envCampaign = process.env.campaign;
const envProjectMarket = process.env.projectMarket;
const themeEndpointURL = process.env.themeEndpoint;
const signupNumbersKRURL = process.env.signupNumbersKR;

function Index({
  setTheme,
  themeData,
  setSignupNumbers,
  setWebStatus,
  setSignFormData,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const hiddenFormDefaultValue = useSelector(
    (state) => state?.hiddenForm?.data,
  );

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googleoptimize.com/optimize.js?id=GTM-K8RRN9R';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  /* Set dynamic theme parameters */
  useEffect(() => {
    if (router.isReady) {
      /* Cater these query parameters */
      const {
        page,
        step,
        donation_module_campaign,
        headline_prefix,
        hero_image_desktop,
        hero_image_mobile,
        // utm_campaign,
        // utm_source,
        // utm_medium,
        // utm_content,
        // utm_term,
      } = router.query;

      /* page=2 force to result page */
      if (page === '2') {
        setWebStatus(true);
      }

      /*
      dispatch({
        type: hiddenFormActions.SET_HIDDEN_FORM,
        data: {
          ...hiddenFormDefaultValue,
          utm_campaign: utm_campaign,
          utm_source: utm_source,
          utm_medium: utm_medium,
          utm_content: utm_content,
          utm_term: utm_term,
        },
      });
      */

      dispatch({ type: signupActions.SET_STEP, data: step ?? 'default' });
      dispatch({
        type: themeActions.SET_PARAMS,
        data: {
          donation_module_campaign,
          headline_prefix,
          hero_image_desktop,
          hero_image_mobile,
        },
      });
    }
  }, [router]);

  /** Fetch signup data on load */
  // useEffect(() => {
  //   async function fetchSignupData() {
  //     const fetchURLs = {
  //       kr: signupNumbersKRURL,
  //     };

  //     const signupData = await axios
  //       .get(fetchURLs[themeData?.Market])
  //       .then((response) => {
  //         return response.data.find((d) => d.Id === themeData?.CampaignId);
  //       })
  //       .catch((error) => console.log(error));

  //     setSignupNumbers({ [themeData?.Market]: signupData });
  //   }
  //   fetchSignupData();
  // }, []);

  /* Set parameters to hiddenForm data */
  useEffect(() => {
    let params = {};

    window.location.search
      .slice(1)
      .split('&')
      .forEach((elm) => {
        if (elm === '') return;
        let spl = elm.split('=');
        const d = decodeURIComponent;
        params[d(spl[0])] = spl.length >= 2 ? d(spl[1]) : true;
      });

    dispatch({
      type: hiddenFormActions.SET_HIDDEN_FORM,
      data: params,
    });
  }, []);

  /* Pre-fill signup data */
  useEffect(() => {
    const domain = document.location.host;
    const market = themeData?.Market?.toUpperCase();
    /* GTM is only applicable for production env */
    initTagManager(market);
    setTheme(themeData);
    pushToDataLayer({event:'petition_load'});
    pushToDataLayerGA4({
      event: 'custom_event',
      event_name: 'petition_load',
      event_category: 'petitions',
      event_action: 'load', 
      custom_metric: 'petition_load'
    });

    let FormObj = {};
    const selectForm = document.forms['mc-form'];
    const documentFormsArray = Array.from(selectForm);
    if (documentFormsArray) {
      documentFormsArray.map((data) => {
        // missing default value in field
        if (!data.defaultValue) {
          return;
        }
        // format MobilePhone and CountryCode field
        if (data.name === 'MobilePhone') {
          FormObj['MobileCountryCode'] = data.defaultValue
            ?.split(' ')[0]
            .replace('+', '');
          FormObj['MobilePhone'] = data.defaultValue?.split(' ')[1];
          return;
        }
        // format Birthdate field
        if (data.name === 'Birthdate') {
          FormObj['Birthdate'] = `${data.defaultValue
            ?.split('/')[2]
            .substring(0, 4)}-01-01`;
          return;
        }
        // other normal field
        FormObj[`${data.name}`] = data.defaultValue ?? '';
      });

      setSignFormData(FormObj);
    }
  }, [themeData]);

  return <DynamicComponent />;
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (data) => {
      dispatch({ type: themeActions.SET_THEME, data });
    },
    setSignupNumbers: (data) => {
      dispatch({ type: formActions.SET_SIGNUP_NUMBERS, data });
    },
    setWebStatus: (bol) => {
      dispatch({ type: statusActions.SET_FORM_SUBMITTED, data: bol });
    },
    setSignFormData: (data) => {
      dispatch({ type: signupActions.SET_SIGN_UP_FORM_DATA, data });
    },
  };
};

export async function getStaticProps() {
  const singleResult = await axios
    .get(themeEndpointURL)
    .then((response) => {
      return response.data.records.find(
        (d) =>
        d.ProjectName === envProjectName && d.EventLabel === envCampaign,
      );
    })
    .catch((error) => console.log(error));

  console.log('Building from ' + envProjectName + ':' + envCampaign);

  !singleResult && console.warn('PROJECT NAME NOT FOUND');

  return {
    props: {
      themeData: singleResult || {},
    },
  };
}

export default connect(null, mapDispatchToProps)(Index);

import React, { useEffect } from 'react';
import Wrapper from '@containers/wrapper';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useRouter } from 'next/router';
import { connect, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as themeActions from 'store/actions/action-types/theme-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';
import {
  initTagManager,
  pushToDataLayer,
  pushToDataLayerGA4
} from '@common/components/TrackingUtils';

/* Determine the returned project index by env variable */
const DynamicComponent = dynamic(() => import(`apps/`), {
  loading: () => <p>loading</p>,
});

/* Get env variables */
const envProjectName = process.env.projectName;
const envCampaign = process.env.campaign;
const envProjectMarket = process.env.projectMarket;
const themeEndpointURL = process.env.themeEndpoint;
 function Index({
  setTheme,
  themeData,
}) {
  const router = useRouter();
  const dispatch = useDispatch(); 

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

      dispatch({
        type: themeActions.SET_PARAMS,
        data: {
          donation_module_campaign,
          headline_prefix,
        },
      });
    }
  }, [router, dispatch]);
 
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
  }, [dispatch]);

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
      
  }, [themeData, setTheme]);

  return <DynamicComponent />;
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (data) => {
      dispatch({ type: themeActions.SET_THEME, data });
    },
  };
};

export async function getStaticProps() {
  const singleResult = await axios
    .get(themeEndpointURL)
    .then((response) => {
      return response.data.records.find(
        (d) =>
        d.ProjectName === envProjectName && d.Market === envProjectMarket && d.EventLabel === envCampaign,
      );
    })
    .catch((error) => console.log(error));

  console.log('Building from ' + envProjectMarket + ':' + envProjectName);

  !singleResult && console.warn('PROJECT NAME NOT FOUND');

  return {
    props: {
      themeData: singleResult || {},
    },
  };
}

export default connect(null, mapDispatchToProps)(Index);

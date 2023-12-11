import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";
import * as formActions from 'store/actions/action-types/form-actions';
// Import library
import { useInView } from 'react-intersection-observer';
import { Box, Flex } from '@chakra-ui/react';
// Import custom containers
import PageContainer from '@containers/pageContainer';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
// Import custom components
import HeroBanner from '@components/ResponsiveBanner/hero';
import ThanksBanner from '@components/ResponsiveBanner/thanks';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/KRForm';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';
import Content from './Content';
import Thankyou from './Thankyou';

import formContent from './form';
import SEO from './SEO';
// Import static
import heroBannerImage from './images/endingnuke-main.jpg';

function Index() {
  const dispatch = useDispatch();
  const signup = useSelector((state) => state?.signup);
  const { step } = signup;
  const submitted = useSelector((state) => state?.status?.submitted);
  const theme = useSelector((state) => state?.theme);
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const mobileForm = useRef(null); 
  const thankForm = useRef(null); 
  const [gclid, setGclid] = React.useState(null);
  const changeGclid = React.useCallback(
    (gclid) => {
      setGclid(gclid);
    }
  )
  
  console.log('isMobile', isMobile)

  useEffect(() => {
    if(window.addGclid && !gclid){window.addGclid();}
  }, []);

  useEffect(() => {
    dispatch({ type: formActions.SET_FORM, data: formContent }); // set form content from form.json
  }, [dispatch]);
 

  useEffect(() => {
    if(thankForm){
      thankForm.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [submitted]);

  return (
    <div>
      <input type="hidden" id="gclid_field" name="gclid_field" onChange={(e)=>{changeGclid(e.target.value);}} />
      <SEO />
      <Box ref={thankForm}>
        {(() => { 
          return submitted ? (
              <ThanksBanner
                defaultImage={
                  theme?.params?.hero_image_desktop ?? heroBannerImage
                }
                content={{
                  title: `${
                    signup?.data?.LastName
                      ? signup?.data?.LastName
                      : '그린피스 서포터즈'
                  }님, 한국 정부가 원전 말고 안전을 선택할 수 있도록 함께 동참해주셔서 감사합니다.`,
                  description: ['여러분의 청원을 모아 한국 정부가 원전 말고 안전을 우선시하도록 사용할 예정입니다.'],
                }}
              />
            ) : (
              <HeroBanner
                defaultImage={
                  theme?.params?.hero_image_desktop ?? heroBannerImage
                }
                content={{
                  title:
                    `${
                      theme?.params?.headline_prefix
                        ? theme?.params?.headline_prefix + '<br/>'
                        : ''
                    }` +
                    '우리가 원하는 건 원전 말고 안전!',
                  description: [''],
                }}
              />
            ); 
        })()}
      </Box>
      <PageContainer>
        <OverflowWrapper>
        {(submitted && isMobile)?  
          <div>
            <Box flex={1} mt={{ base: 10, sm: 60 }} style={{paddingTop: 50, paddingLeft:20, paddingRight:20}}>
              <ContentContainer> 
                {(() => { 
                    return submitted ? <Thankyou /> : <Content />; 
                })()}
              </ContentContainer>
            </Box>
            <Box flex={1} ref={mobileForm}>
              <FormContainer>
                <Box ref={ref}>
                  {(() => { 
                        return submitted ? (
                          <DonationModule
                            market={'kr'}
                            language={'ko_KR'}
                            campaign={process.env.campaign}
                            campaignId={theme?.data?.CampaignId}
                            env={process.env.envParam}
                          />
                        ) : (
                          <SignupForm />
                        ); 
                    })()}
                </Box>
              </FormContainer>
            </Box>
          </div>
          :
          <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box flex={1} mt={{ base: 10, sm: 60 }}>
              <ContentContainer>
                {(() => { 
                  return submitted ? <Thankyou /> : <Content />; 
                })()}
              </ContentContainer>
            </Box>
            <Box flex={1} ref={mobileForm}>
              <FormContainer>
                <Box ref={ref}>
                  {(() => { 
                      return submitted ? (
                        <DonationModule
                          market={'kr'}
                          language={'ko_KR'}
                          campaign={process.env.campaign}
                          // campaign={
                          //   theme?.params?.donation_module_campaign ?? 'nuke'
                          // }
                          campaignId={theme?.data?.CampaignId}
                          env={process.env.envParam}
                        />
                      ) : (
                        <SignupForm />
                      ); 
                  })()}
                </Box>
              </FormContainer>
            </Box>
          </Flex>
          }
        </OverflowWrapper>
      </PageContainer>
      <PetitionFooter locale={'Korean'} />
      <ScrollToTargetButton target={mobileForm} targetInView={inView} />
    </div>
  );
}

export default Index;

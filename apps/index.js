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
// Import Contents
//import Donation from './Donation';
import Content from './Content';
import Thankyou from './Thankyou';

import formContent from './form';
import SEO from './SEO';
// Import static
import heroBanner from './images/yonggitest-main-0530.jpg';

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
  //console.log('step isMobile',step, isMobile)

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
    <>
      <input type="hidden" id="gclid_field" name="gclid_field" onChange={(e)=>{changeGclid(e.target.value);}} />
      <SEO />
      <Box ref={thankForm}>
        {(() => { 
            return submitted ? (
              <ThanksBanner
                defaultImage={
                  theme?.params?.hero_image_desktop ?? (isMobile)?heroBanner:heroBanner
                }
                content={{
                  title: `${
                    signup?.data?.LastName
                      ? signup?.data?.LastName
                      : '그린피스 서포터즈'
                  }님, 캠페인에 함께해주셔서 감사합니다!`,
                  description: [''],
                }}
              />
            ) : (
              <HeroBanner
                defaultImage={
                  theme?.params?.hero_image_desktop ?? (isMobile)?heroBanner:heroBanner
                }
                content={{
                  title:
                    `${
                      theme?.params?.headline_prefix
                        ? theme?.params?.headline_prefix + '<br/>'
                        : ''
                    }` +
                    '기후위기를 가속화하는 LNG 발전소 신규 건설 멈춰야 합니다!',
                  description: [''],
                  alt: '가스산업에 항의하기 위해 비엔나에서 열린 그린피스 행진(2024년 3월)',
                }}
              />
            ); 
        })()}
      </Box>
      <PageContainer>
        <OverflowWrapper>
        {(submitted && isMobile)?  
          <>
            <Box flex={1} mt={{ base: 10, sm: 60 }} style={{paddingTop: 50,}}>
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
          </>
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
    </>
  );
}

export default Index;

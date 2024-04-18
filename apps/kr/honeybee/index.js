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
import heroBannerImage from './images/herobanner.jpeg';

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
                  theme?.params?.hero_image_desktop ?? heroBannerImage
                }
                content={{
                  title: `${
                    signup?.data?.LastName
                      ? signup?.data?.LastName
                      : '그린피스 서포터즈'
                  }님, 청원에 함께해 주셔서 감사합니다.`,
                  description: ['보내주신 청원으로 국무총리 산하 ‘꿀벌 살리기 위원회’의 구축을 적극 요구하여 사라져가는 꿀벌을 살리는데 노력하겠습니다.'],
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
                    '사라지는 꿀벌과 야생벌, <br/>더 늦기 전에 구해주세요.',
                  description: [''],
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

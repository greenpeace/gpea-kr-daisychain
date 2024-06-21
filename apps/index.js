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
import DonationModule from '@components/GP/DonationModule';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';
import Content from './Content';

import formContent from './form';
import SEO from './SEO';
// Import static
import heroBannerImage from './images/main_hero.jpg';
import heroBannerImage_m from './images/main_hero_m.jpg';

function Index() {
  const dispatch = useDispatch();
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
 

  return (
    <div>
      <input type="hidden" id="gclid_field" name="gclid_field" onChange={(e)=>{changeGclid(e.target.value);}} />
      <SEO />
      <Box ref={thankForm}>
        {(() => { 
            return (
              <HeroBanner
                defaultImage={
                  isMobile ? heroBannerImage_m : heroBannerImage
                }
                content={{
                  title:
                    `${
                      theme?.params?.headline_prefix
                        ? theme?.params?.headline_prefix + '<br/>'
                        : ''
                    }` +
                    '위기에 처한 지구, 더 늦기 전에 지켜주세요!',
                  description: [''],
                }}
              />
            ); 
        })()}
      </Box>
      <PageContainer>
        <OverflowWrapper>
        {(isMobile)?  
          <div>
            <Box flex={1} mt={{ base: 10, sm: 60 }} style={{paddingTop: 50, paddingLeft:20, paddingRight:20}}>
              <ContentContainer> 
                {(() => { 
                    return <Content />; 
                })()}
              </ContentContainer>
            </Box>
            <Box flex={1} ref={mobileForm}>
              <FormContainer>
                <Box ref={ref}>
                  <DonationModule
                    market={'kr'}
                    language={'ko_KR'}
                    campaign={process.env.campaign}
                    campaignId={theme?.data?.CampaignId}
                    env={process.env.envParam}
                  />
                </Box>
              </FormContainer>
            </Box>
          </div>
          :
          <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box flex={1} mt={{ base: 10, sm: 60 }}>
              <ContentContainer>
                {(() => { 
                    return <Content />; 
                })()}
              </ContentContainer>
            </Box>
            <Box flex={1} ref={mobileForm}>
              <FormContainer>
                <Box ref={ref}>
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

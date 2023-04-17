import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";
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
import Image from 'next/image'

// Import Contents
//import Donation from './Donation';
import Content from './Content';
import SEO from './SEO';
// Import static
import heroBannerImage from './images/GP0STSX96_PressMedia_ed.jpg';

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
    },[]
  )
  //console.log('step isMobile',step, isMobile)

  useEffect(() => {
    if(window.addGclid && !gclid){window.addGclid();}
  }, [gclid]);

  const prevSlide = () => {};
  const nextSlide = () => {};
  const goToSlide = (id) => {};
  return (
    <>
      <SEO />
      <input type="hidden" id="gclid_field" name="gclid_field" onChange={(e)=>{changeGclid(e.target.value);}} />
      <div className="wrapper">
        <div className="main">
            <section className="main__hero">
                <video poster="" loop autoPlay muted="muted">
                    <source src="https://gpseoulwebserver.co.kr/asset/video/rue-hero-video.mp4" type="video/mp4" />
                </video>                
                <div className="main__container-outer">
                    <div className="main__content">
                        <div className="main__logo">
                        </div>
                        <div className="main__text">
                            <span className="main__join-number">현재까지 4587명이 함께 해주셨습니다!</span> 
                            <div className="main__title">
                                저와 함께,<br /><span>우리의 지구를 위해</span><br /> 행동해주세요
                                <a href="#form-section" className="to-form">후원하기</a>
                            </div> 
                        </div>
                    </div>
                    <span className="main__hero-scroll">
                        <span>scroll</span>
                    </span>
                </div>
            </section>
            <section className="main__form-area" id="form-section">
                <div className="main__form-center"> 
                    <div className="main__form-text">
                        여러분의 후원으로 그린피스는<br/> <b>환경 파괴의 실태를 폭로</b>하고,<br/> 과학연구를 통해 환경 보호를 위한 <br/><b>해결책을 제시</b>할 수 있습니다.
                    </div>
                    <DonationModule
                      market={'kr'}
                      language={'ko_KR'}
                      campaign={process.env.campaign}
                      campaignId={theme?.data?.CampaignId}
                      env={process.env.envParam}
                    />
                </div>
            </section>
            <section className="main__donation-asking-half">
                <div className="content-area">
                    <h1 className="white">배우 류준열님과 함께 지구를 위한 변화를 만들어주세요!</h1>
                    <p className="white align-left">기후변화는 북극곰의 문제가 아닌 우리의 문제입니다.<br/> 우리가 여행을 떠나 행복한 추억을 만든 섬은 잠길 것이고 <br/>산불은 계절이 바뀌어도 꺼지지 않을 것입니다. <br/>하지만 지금, 우리가 할 수 있는 일이 있습니다.</p>
                    <a href="#form-section" className="to-form">함께하기</a>
                </div>
            </section>
            <section className="main__donation-usage align-center">
                <h1>후원금은 어떻게 사용되나요?</h1>
                <p>그린피스는 캠페인의 정치적, 재정적 독립성을 유지하기 위해 정부와 기업의 후원을 일절 받지 않으며<br/> 개인 후원자님들의 후원으로만 활동하고 있습니다.</p>
                <div className="main__donation-usage-container">
                    <div className="main__donation-usage-item odd">
                        <Image src="https://gpseoulwebserver.co.kr/asset/images/rue/usage01.png" width="100%" height="100%" alt="기후위기" /> 
                        <span className="usage-number">38.2<span className="percent">%</span></span>   
                        <span className="usage-text">기후위기 대응</span>
                    </div>
                    <div className="main__donation-usage-item even">
                        <Image src="https://gpseoulwebserver.co.kr/asset/images/rue/usage02.png" width="100%" height="100%" alt="생물다양성" />
                        <span className="usage-number">6.8<span className="percent">%</span></span>
                        <span className="usage-text">생물 다양성(해양, 삼림 보호)</span>
                    </div>
                    <div className="main__donation-usage-item odd">
                        <Image src="https://gpseoulwebserver.co.kr/asset/images/rue/usage03.png" width="100%" height="100%" alt="독성물질 제거" />
                        <span className="usage-number">6.4<span className="percent">%</span></span>
                        <span className="usage-text">독성물질 제거(플라스틱)</span>
                    </div>
                    <div className="main__donation-usage-item even">
                        <Image src="https://gpseoulwebserver.co.kr/asset/images/rue/usage04.png" width="100%" height="100%" alt="글로벌 캠페인" />
                        <span className="usage-number">24<span className="percent">%</span></span>
                        <span className="usage-text">글로벌 캠페인</span>
                    </div>
                    <div className="main__donation-usage-item odd">
                        <Image src="https://gpseoulwebserver.co.kr/asset/images/rue/usage05.png" width="100%" height="100%" alt="미디어 활동 및 비폭력 직접행동" />
                        <span className="usage-number">18.9<span className="percent">%</span></span>
                        <span className="usage-text">미디어 활동 및 비폭력 직접행동</span>
                    </div>
                    <div className="main__donation-usage-item even">
                        <Image src="https://gpseoulwebserver.co.kr/asset/images/rue/usage06.png" width="100%" height="100%" alt="과학 조사 연구와 친환경 정책" />
                        <span className="usage-number">5.7<span className="percent">%</span></span>
                        <span className="usage-text">과학 조사 연구와 친환경 정책</span>
                    </div>
                </div>
            </section>
            <section className="main__donation-asking-full">
                <div className="content-area align-left">
                    <h1 className="white">배우 류준열님과 함께 지구를 위한 변화를 만들어주세요!</h1>
                    <p className="white align-left">기후변화는 북극곰의 문제가 아닌 우리의 문제입니다.<br/> 우리가 여행을 떠나 행복한 추억을 만든 섬은 잠길 것이고 <br/>산불은 계절이 바뀌어도 꺼지지 않을 것입니다. <br/>하지만 지금, 우리가 할 수 있는 일이 있습니다.</p>
                    <a href="#form-section" className="to-form">함께하기</a>
                </div>
            </section>
            <section className="main__activity">
                <h1>기후위기에 대응하는 그린피스의 활동</h1>
                <p className="align-left">그린피스는 전 세계에서 기후 위기를 막기 위해 활발하게 활동하고 있습니다.</p>
                <div className="main__activity-container">
                    <div className="main__activity-item">
                        {/* <Image src="https://gpseoulwebserver.co.kr/asset/images/rue/activity01.png" width="100%" height="100%" alt="정치권을 향한 기후 정책 변화 요구" /> */}
                        <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                        <Image
                            src="https://gpseoulwebserver.co.kr/asset/images/rue/activity01.png"
                            alt="정치권을 향한 기후 정책 변화 요구"
                            layout="fill"
                            objectFit="cover"
                        />
                        </div>
                        <div className="main__activity-item-content">
                            <div className="main__activity-item-number">
                                <span>01</span>
                            </div>
                            <span className="main__activity-item-text">정치권을 향한 기후 정책 변화 요구</span>
                        </div>
                    </div>
                    <div className="main__activity-item">
                        <Image src="https://gpseoulwebserver.co.kr/asset/images/rue/activity02.png" width="100%" height="100%" alt="기업에 책임을 묻고 변화를 요구하는 캠페인" />
                        <div className="main__activity-item-content">
                            <div className="main__activity-item-number">
                                <span>02</span>
                            </div>
                            <span className="main__activity-item-text">기업에 책임을 묻고 변화를 요구하는 캠페인</span>
                        </div>
                    </div>
                    <div className="main__activity-item">
                        <Image src="https://gpseoulwebserver.co.kr/asset/images/rue/activity03.png" width="100%" height="100%" alt="기후 재난 현장 긴급 활동" />
                        <div className="main__activity-item-content">
                            <div className="main__activity-item-number">
                                <span>03</span>
                            </div>
                            <span className="main__activity-item-text">기후 재난 현장 긴급 활동</span>
                        </div>
                    </div>
                    <div className="main__activity-item">
                        <Image src="https://gpseoulwebserver.co.kr/asset/images/rue/activity04.png" width="100%" height="100%" alt="과학조사와 미디어 활동을 통한 대중 캠페인" />
                            <div className="main__activity-item-content">
                                <div className="main__activity-item-number">
                                    <span>04</span>
                                </div>
                                <span className="main__activity-item-text">과학조사와 미디어 활동을 통한 대중 캠페인</span>
                            </div>
                    </div>
                </div>
            </section>
            <section className="main__carousel align-center">
                <h1>그린피스와 함께 변화를 이끌어주세요!</h1>
                <p>환경과 미래를 위해 동참한 사람들의 목소리를 들어보세요.</p>
                <div className="carousel">
                    <div className="carousel-body">
                        <button className="button" onClick={prevSlide()}>
                            <div className="prev"></div>
                        </button>
                        <div className="slide-container">
                            <div className="slide" id="slide-1">
                                <Image src="https://gpseoulwebserver.co.kr/asset/images/rue/christina.png" width="100%" height="100%" className="ppl" alt="" />
                                <div className="slide-title">
                                    <h3>크리스티나 산 비센테</h3>
                                    <span>그린피스 동아시아지부 부사무총장</span>
                                </div>
                                <p>그린피스의 변하지 않는 정신은 바로 사람을 중심으로 한다는 것입니다. 우리의 모든 활동은 사람을 중심으로 움직이며, 여러분이 함께 해주신 모든 참여들은 환경 문제 해결에 매우 중요합니다. 우리 앞에는 다양한 도전이 놓여있습니다. 바로 여러분의 힘으로 우리는 불가능을 가능하게 할 수 있습니다.</p>
                            </div>
                            <div className="slide" id="slide-2">
                                <Image src="https://gpseoulwebserver.co.kr/asset/images/rue/ryu_big.png" width="100%" height="100%" lassName="ppl" alt="" />
                                <div className="slide-title">
                                    <h3>류준열</h3>
                                    <span>환경운동가, 영화배우</span>
                                </div>
                                <p>거창하게 뭘 해야한다 보다는 생활 속에서 내가 실천할 수 있는 것들 부터 해보자. 그런 마인드였어요. ‘용기내’ 처럼요. 그런데 조금씩 알아갈 수록 기후변화는 결이 다른 문제더라고요. 좀 더 큰 틀의 변화가 필요한 문제라고 생각해요.</p>
                            </div>
                            <div className="slide" id="slide-3">
                                <Image src="https://gpseoulwebserver.co.kr/asset/images/rue/byungwook_yoo.png" width="100%" height="100%" className="ppl" alt="" />
                                <div className="slide-title">
                                    <h3>유병욱</h3>
                                    <span>크리에이티브 디렉터, TBWA KOREA</span>
                                </div>
                                <p>사실 기후변화가 얼마나 치명적인지를 알리는 광고는 지금까지 많았죠. 저만해도 북극곰으로 대표되는 클리셰들이 떠오릅니다. 그래서 이번 그린피스 광고에서는 이 부분을 메시지 적으로 살짝 비틀고 싶었어요. ‘나는 북극곰인데, 나는 기후변화가 신경 쓰이지 않는다. 오히려 걱정해야 할 사람은 당신이다.’ 라고 말이죠.</p>
                            </div>
                            <div className="slide" id="slide-4">
                                <Image src="https://gpseoulwebserver.co.kr/asset/images/rue/yoo_daeeol.png" width="100%" height="100%" className="ppl" alt="" />
                                <div className="slide-title">
                                    <h3>유대얼</h3>
                                    <span>TV CF 감독</span>
                                </div>
                                <p>오염된 음식을 먹는 현대인들에 대한 주제도 흥미로울 것 같아요. 토양과 물이 각종 화학물질과 미세플라스틱 등으로 오염되어 있잖아요? 그로 인해 우리가 먹는 음식물에서 나오는 유해 물질들이 우리 몸에 어떤 영향을 주는지 경고하는 메시지를 전한다면, 좀 더 개인에게 피부에 와 닿는 직접적인 경고가 되지 않을까요?</p>
                            </div>
                            <div className="slide" id="slide-5">
                                <Image src="https://gpseoulwebserver.co.kr/asset/images/rue/kt.png" width="100%" height="100%" className="ppl" alt="" />
                                <div className="slide-title">
                                    <h3>쯔이팽청</h3>
                                    <span>그린피스 동아시아지부 사무총장</span>
                                </div>
                                <p>지금 동아시아에서 일어나는 일들은 지구 전체의 미래 환경에 엄청난 영향을 미칠 것입니다. 그만큼 불안감도 크지만, 그린피스 동아시아지부 사람들은 운이 좋은 사람들이기도 합니다. 이처럼 중요한 시기에 의미 있는 변화를 시민들과 함께 만들어 나갈 수 있기 때문입니다.</p>
                            </div>
                            <div className="slide" id="slide-6">
                                <Image src="https://gpseoulwebserver.co.kr/asset/images/rue/jude.png" width="100%" height="100%" className="ppl" alt="" />
                                <div className="slide-title">
                                    <h3>이현숙/주드</h3>
                                    <span>그린피스 동아시아지부 부사무총장</span>
                                </div>
                                <p>그린피스의 변하지 않는 정신은 바로 사람을 중심으로 한다는 것입니다. 우리의 모든 활동은 사람을 중심으로 움직이며, 여러분이 함께 해주신 모든 참여들은 환경 문제 해결에 매우 중요합니다. 우리 앞에는 다양한 도전이 놓여있습니다. 바로 여러분의 힘으로 우리는 불가능을 가능하게 할 수 있습니다.</p>
                            </div>
                        </div>
                        <button className="button" onClick={nextSlide()}>
                            <div className="next"></div>
                        </button>
                    </div>
                    <div className="carousel-controls">
                      <button onClick={goToSlide(1)}></button>
                      <button onClick={goToSlide(2)}></button>
                      <button onClick={goToSlide(3)}></button>
                      <button onClick={goToSlide(4)}></button>
                      <button onClick={goToSlide(5)}></button>
                      <button onClick={goToSlide(6)}></button>
                    </div>
                  </div>
            </section>
        </div>
        <footer>
            <div className="footer__text">
                <div className="footer__left ">
                    <Image src="https://gpseoulwebserver.co.kr/asset/images/logo/Greenpeace_Logo_Black_SVG.svg" width="100%" height="100%" alt=""/>
                    <p className="align-left">후원 완료와 동시에 첫 후원금이 결제됩니다. 정기 후원 결제일은 매월 10일이며, 결제가 되지 않을 시 결제가 되지 않은 경우 같은 달 15일, 20일, 27일 재결제 됩니다. <br/><br/> 자동이체의 경우 결제일이 공휴일, 주말에 겹치는 경우 그 다음 도래하는 은행 영업일에 결제됩니다. (*결제일 전날이 서울사무소 휴일인 경우 결제가 하루 지연될 수 있습니다.) 신용카드의 경우 휴일 여부와 상관 없이 결제일에 결제됩니다. 다만, 시스템 처리 과정에서 다음 영업일에 결제될 수 있습니다.</p>
                </div>
                <div className="footer__right">
                    <p className="align-left">14세 미만 후원자는 법정 대리인 동의 후 후원이 가능하며 14세~19세 미성년자일 경우 정기후원 3만원 이하, 일시후원 30만원 이하의 후원만 가능합니다. <br/><br/>연말정산 소득공제 혜택을 받으실 수 있습니다. 가입 후 연말정산을 위한 개인정보를 꼭 입력해 주세요. 그린피스는 독립성을 지키기 위하여 정부, 기업의 후원은 받지 않습니다. <br/><br/>기타 문의는 FAQ 참고 부탁드립니다. 또한 후원관리팀으로<br/> 이메일 sukr@greenpeace.org 또는 <br/>유선 문의 주세요. 02-3144-1997 (평일 오전 10시~오후 5시)</p>
                </div>
            </div>
            <div className="footer__link">
                <div className="footer__link-url align-center">
                    <a href="">홈페이지</a> | <a href="">개인정보</a> | <a href="">보호정책</a> | <a href="">저작권</a> | <a href="">연락처</a> | <a href="">보도자료와 미디어</a> | <a href="">그린피스 소개</a>
                </div>
                <div className="footer__link-copy align-center">© Greenpeace 2023</div>
            </div>
        </footer>
    </div>
    </>
  );
}

export default Index;

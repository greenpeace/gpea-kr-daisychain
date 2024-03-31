import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// Import library
import { Image } from '@chakra-ui/react';
// Import custom components
import DonationModule from '@components/GP/DonationModule';

// Import Contents
import SEO from './SEO';
// Import static
// import usage01 from "./images/usage01.png";
// import usage02 from "./images/usage02.png";
// import usage03 from "./images/usage03.png";
// import usage04 from "./images/usage04.png";
// import usage05 from "./images/usage05.png";
// import usage06 from "./images/usage06.png";

// import activity01 from "./images/activity01.png";
// import activity02 from "./images/activity02.png";
// import activity03 from "./images/activity03.png";
// import activity04 from "./images/activity04.png";

// import christina from "./images/christina.png";
// import ryu_big from "./images/ryu_big.png";
// import byungwook_yoo from "./images/byungwook_yoo.png";
// import yoo_daeeol from "./images/yoo_daeeol.png";
// import kt from "./images/kt.png";
// import jude from "./images/jude.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

function Index() {
  const theme = useSelector((state) => state?.theme);
  const [gclid, setGclid] = React.useState(null);
  const changeGclid = React.useCallback(
    (gclid) => {
      setGclid(gclid);
    },[]
  )
  //console.log('step isMobile',step, isMobile)

  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    if(window.addGclid && !gclid){window.addGclid();}
  }, [gclid]);
 
    const [ fixedButtonDisplay, setFixedButtonDisplay ] = useState('none');

    const checkScreenWidth = () => {
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        return screenWidth < 1024;
    };

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.main__form-area');
            const elementBottomPosition = element.getBoundingClientRect().bottom;
            if (elementBottomPosition < 0 && checkScreenWidth()) {
                setFixedButtonDisplay('block');
            } else {
                setFixedButtonDisplay('none');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [numberOfResponsesString, setNumberOfResponsesString] = useState('0');
    const [numberOfResponses, setNumberOfResponses] = useState(0);

    useEffect(() => {
        const numberOfResponses = window.numberOfResponses;
        if (!isNaN(numberOfResponses)) {
            setNumberOfResponsesString(numberOfResponses.toString());
        }
    }, []);

    useEffect(() => {
        const parsedNumberOfResponses = parseInt(numberOfResponsesString, 10);
        if (!isNaN(parsedNumberOfResponses)) {
        setNumberOfResponses(parsedNumberOfResponses);
        }
    }, [numberOfResponsesString]);

  return (
    <>
      <SEO />
      <input type="hidden" id="gclid_field" name="gclid_field" onChange={(e)=>{changeGclid(e.target.value);}} />
      <div className="wrapper">
        <div className="main">
            <section className="main__hero">              
                <div className="main__container-outer">
                    <div className="main__content">
                        <div className="main__logo">
                        </div>
                        <div className="main__text">
                            <span className="main__join-number">현재까지 <span className="signed-number">{numberOfResponses}</span>명이 함께 해주셨습니다!</span> 
                            <div className="main__title">
                                우리와 함께,<br/><span>바다의 마지막 신호를</span><br/> 들어주세요
                                <a href="#form-section" className="to-form">후원하기</a>
                            </div> 
                        </div>
                    </div>
                    <a href="#form-section" className="main__hero-scroll to-form">
                        <span>scroll</span>
                    </a>
                </div>
            </section>
            <section className="main__form-area" id="form-section">
                <div className="main__form-center"> 
                    <div className="main__form-text">
                    후원자님과 함께 만드는<br/> <b>다큐멘터리를 통해</b> 해양 오염의 새<br/>로운 면을 밝히고, 바다를 구할 수 <br/>있는 해결책<b> '해양보호구역'을 <br/>알릴 수 있습니다.</b>
                    </div>
                    <div className="main__form-donate">
                        <DonationModule
                        market={'kr'}
                        language={'ko_KR'}
                        campaign={process.env.campaign}
                        campaignId={theme?.data?.CampaignId}
                        env={process.env.envParam}
                        />
                    </div>
                </div>
            </section>
            <section className="main__donation-asking-half">
                <div className="content-area">
                    <span>“SEAGNAL: The Ocean’s Last Call”</span>
                    <h1 className="green">이것은 아픈 바다의 이야기이자, <br/>우리의 이야기입니다</h1>
                    <p className="white align-left">저는 제주의 4년 차 젊은 해녀 이유정입니다. <br/>여러분이 보는 푸른 제주 바다는 제가 보는 바닷속과 많이 다릅니다.</p>
                    <p className="white align-left">물고기로 가득할 것 같은 바닷속엔 버려진 그물이 가득하고, 할머니들과 물질을 하러 걷는 길엔 매일 아침 뾰족한 유리병 조각이 깔려 있습니다.</p>
                    <p className="white align-left">매일 쓰레기를 줍지만 저 혼자 바다를 지키기엔 역부족입니다.</p>
                    <p className="white align-left">바다의 마지막 신호를 알리기 위한 다큐멘터리 “SEAGNAL: The Ocean’s Last Call” 제작에 함께해 주세요.</p>
                    <p className="white align-left">엔딩크레딧에 이름을 올리고, <b className="white">저와 함께 우리 바다를 지켜주세요.</b></p>
                    <a href="#form-section" className="to-form">함께하기</a>
                </div>
                <div className="image-area">
                    <Image src="https://gpseoulwebserver.co.kr/donation/oceandocu/api/story_image2.jpg" alt="오션다큐해녀"/>
                </div>
            </section>
            <section className="main__donation-asking-full">
                <div className="image-area">
                </div>
                <div className="content-area">
                    <h1 className="green">여러분의 후원이 푸른 바다를 지켜내는 투명한 힘이 됩니다!</h1>
                    <p className="white align-left">그린피스는 다큐멘터리 촬영지인 제주 바다를 포함해 살아 숨 쉬는 전 세계의 바다를 보호하기 위해 활동하고 있습니다.</p>
                    <p className="white align-left">여러분의 후원으로 해양 파괴의 심각성을 알리고, 현장조사와 연구를 통해 바다를 지키기 위한 해결책을 제시할 수 있습니다.</p>
                    <a href="#form-section" className="to-form">함께하기</a>
                </div>
            </section>
            <section className="main__activity general">
                <h1>기후위기에 대응하는 그린피스의 활동</h1>
                <p className="align-left">그린피스는 전 세계에서 기후 위기를 막기 위해 활발하게 활동하고 있습니다.</p>
                <div className="main__activity-container">
                    <div className="main__activity-item">
                        <Image src="https://gpseoulwebserver.co.kr/donation/oceandocu/api/gp_act_1.jpg" alt="현장 조사/연구 결과를 바탕으로 보고서 및 자료 발간"/>
                        <div className="main__activity-item-content">
                            <div className="main__activity-item-number">
                                <span>01</span>
                            </div>
                            <span className="main__activity-item-text darkblue">현장 조사/연구 결과를 바탕으로 보고서 및 자료 발간</span>
                        </div>
                    </div>
                    <div className="main__activity-item">
                        <Image src="https://gpseoulwebserver.co.kr/donation/oceandocu/api/gp_act_2.jpg" alt="해양보호구역 확대를 위한 해양 탐사 활동"/>
                        <div className="main__activity-item-content">
                            <div className="main__activity-item-number">
                                <span>02</span>
                            </div>
                            <span className="main__activity-item-text darkblue">해양보호구역 확대를 위한 해양 탐사 활동</span>
                        </div>
                    </div>
                    <div className="main__activity-item">
                        <Image src="https://gpseoulwebserver.co.kr/donation/oceandocu/api/gp_act_3.jpg" alt="정부 대상 글로벌 해양조약 비준 촉구 활동"/>
                        <div className="main__activity-item-content">
                            <div className="main__activity-item-number">
                                <span>03</span>
                            </div>
                            <span className="main__activity-item-text darkblue">정부 대상 글로벌 해양조약 비준 촉구 활동</span>
                        </div>
                    </div>
                    <div className="main__activity-item">
                        <Image src="https://gpseoulwebserver.co.kr/donation/oceandocu/api/gp_act_4.jpg" alt="해양보호 시민 참여 활동 시행"/>
                            <div className="main__activity-item-content">
                                <div className="main__activity-item-number">
                                    <span>04</span>
                                </div>
                                <span className="main__activity-item-text darkblue">해양보호 시민 참여 활동 시행</span>
                            </div>
                    </div>
                </div>
            </section>
            <section className="main__carousel align-center">
                <h1>그린피스와 함께 변화를 이끌어주세요!</h1>
                <p>환경과 미래를 위해 동참한 사람들의 목소리를 들어보세요.</p>

                <div className="carousel">
                    <div className="carousel-body">
                        <Swiper
                        navigation={true}
                        pagination={{
                          clickable: true,
                          //dynamicBullets: true,
                        }}
                        spaceBetween={0}
                        centeredSlides={true}
                        slidesPerView={1}
                        modules={[ Navigation, Pagination ]}
                        className="slide-container"
                        >
                        <SwiperSlide>
                            <div className="slide" id="slide-2">
                            <Image src="https://gpseoulwebserver.co.kr/donation/oceandocu/api/people1.png" width="100%" height="100%" className="ppl" alt="" />
                            <div className="slide-title">
                                <h3>박세희</h3>
                                <span>오션 다큐멘터리 촬영감독</span>
                            </div>
                            <p>다큐멘터리를 촬영하면서 직접 바다의 면면을 보니, 짐작하던 것보다 훨씬 많이 병들어 있습니다. 나의 바다, 우리의 바다를 보듬어 주어야 할 때입니다.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide" id="slide-1">
                            <Image src="https://gpseoulwebserver.co.kr/donation/oceandocu/api/people2.png" width="100%" height="100%" className="ppl" alt="" />
                            <div className="slide-title">
                                <h3>박정례</h3>
                                <span>오션 다큐멘터리 감독</span>
                            </div>
                            <p>이번 다큐멘터리를 통해 우리 모두가 애써 감아 왔던 눈을 뜨고 나의 바다가 처한, 우리의 현실을 직면할 용기를 가졌으면 좋겠습니다. 그것이 분명 변화의 시작이 될 수 있을 거라 생각합니다.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide" id="slide-3">
                            <Image src="https://gpseoulwebserver.co.kr/donation/oceandocu/api/people3.png" width="100%" height="100%" className="ppl" alt="" />
                            <div className="slide-title">
                                <h3>김연하</h3>
                                <span>그린피스 해양 캠페이너</span>
                            </div>
                            <p>푸른 행성이라는 지구의 별칭은 바다에서부터 시작되었습니다. 지구의 푸른 혈류 바다가 건강하게 보호되도록 보다 많은 지지와 관심이 필요합니다.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide" id="slide-4">
                            <Image src="https://gpseoulwebserver.co.kr/donation/oceandocu/api/people4.png" width="100%" height="100%" className="ppl" alt="" />
                            <div className="slide-title">
                                <h3>이지윤</h3>
                                <span>오션 다큐멘터리 PD</span>
                            </div>
                            <p>우리의 생존을 위협하는 기후 위기에 대한 가장 강력한 해결책은 바다입니다. 우리가 바다를 지켜야 바다도 우리를 지켜줄 수 있습니다.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide" id="slide-5">
                            <Image src="https://gpseoulwebserver.co.kr/donation/oceandocu/api/people5.png" width="100%" height="100%" className="ppl" alt="" />
                            <div className="slide-title">
                                <h3>이유정</h3>
                                <span>제주 해녀</span>
                            </div>
                            <p>저는 해녀로 생을 살다가 마감하고 싶은데, 그전에 바다가 저를 은퇴시킬 것 같아요. 바다에는 분명 과부하가 올 거예요. 우리 바다는 우리가 지키자는 마음으로 행동해야 해요.</p>
                            </div>
                        </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
        <footer>
            <div className="footer__text">
                <div className="footer__left">
                <Image src="https://gpseoulwebserver.co.kr/asset/images/logo/Greenpeace_Logo_Black_SVG.svg" alt="Greenpeace"/>
                    <p className="align-left">후원 완료와 동시에 첫 후원금이 결제됩니다. 정기 후원 결제일은 매월 10일이며, 결제가 되지 않은 경우 같은 달 15일, 20일, 27일 재결제 됩니다. <br/><br/> 자동이체의 경우 결제일이 공휴일, 주말에 겹치는 경우 그 다음 도래하는 은행 영업일에 결제됩니다. (*결제일 전날이 서울사무소 휴일인 경우 결제가 하루 지연될 수 있습니다.) 신용카드의 경우 휴일 여부와 상관 없이 결제일에 결제됩니다. 다만, 시스템 처리 과정에서 다음 영업일에 결제될 수 있습니다.</p>
                </div>
                <div className="footer__right">
                    <p className="align-left">14세 미만 후원자는 법정 대리인 동의 후 후원이 가능하며 14세~19세 미성년자일 경우 정기후원 3만원 이하, 일시후원 30만원 이하의 후원만 가능합니다. <br/><br/>연말정산 소득공제 혜택을 받으실 수 있습니다. 가입 후 연말정산을 위한 개인정보를 꼭 입력해 주세요. 그린피스는 독립성을 지키기 위하여 정부, 기업의 후원은 받지 않습니다. <br/><br/>기타 문의는 FAQ 참고 부탁드립니다. 또한 후원관리팀으로<br/> 이메일 help.kr@greenpeace.org 또는 <br/>유선 문의 주세요. 02-3144-1997 (평일 오전 10시~오후 5시)</p>
                </div>
            </div>
            <div className="footer__link">
                <div className="footer__link-url align-center">
                    <a href="https://www.greenpeace.org/korea/">홈페이지</a> | <a href="https://www.greenpeace.org/korea/privacy-and-cookies/">개인정보 보호정책</a> | <a href="https://www.greenpeace.org/korea/terms-and-conditions/">저작권</a> | <a href="https://www.greenpeace.org/korea/about/contact/">연락처</a> | <a href="https://www.greenpeace.org/korea/press-media/press-releases/">보도자료와 미디어</a> | <a href="https://www.greenpeace.org/korea/about/overview/">그린피스 소개</a>
                </div>
                <div className="footer__link-copy align-center">Copyright © {year} Greenpeace. All Rights Reserved. | 재단법인 그린피스 | 대표자: 남부원 | 주소: 서울시 용산구 한강대로 257 청룡빌딩 6층 (우편번호: 04322) | 고유번호: 105-82-21567 </div>
            </div>
        </footer>
        <div className="mobile__submit-area" style={{ display: fixedButtonDisplay }}>
            <a href="#form-section" className="btn__mobile-submit to-form">함께하기</a>
        </div>
    </div>
    </>
  );
}

export default Index;

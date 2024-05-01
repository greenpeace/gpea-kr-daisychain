import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Image } from '@chakra-ui/react';
import DonationModule from '@components/GP/DonationModule';
import SEO from './SEO';

function Index() {
    const theme = useSelector((state) => state?.theme);
    const { query } = useRouter();
    const lowerCaseQuery = Object.keys(query).reduce((result, key) => {
        result[ key.toLowerCase() ] = query[ key ];
        return result;
    }, {});

    const envCampaignId = lowerCaseQuery[ 'campaignid' ];
    const [ gclid, setGclid ] = React.useState(null);
    const changeGclid = React.useCallback(
        (gclid) => {
            setGclid(gclid);
        }, []
    )
    //console.log('step isMobile',step, isMobile)

    const [ year, setYear ] = useState(new Date().getFullYear());

    useEffect(() => {
        if (window.addGclid && !gclid) { window.addGclid(); }
    }, [ gclid ]);

    const [ fixedButtonDisplay, setFixedButtonDisplay ] = useState('none');

    const checkScreenWidth = () => {
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        return screenWidth < 1025;
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

    const [ numberOfResponsesString, setNumberOfResponsesString ] = useState('0');
    const [ numberOfResponses, setNumberOfResponses ] = useState(0);

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
    }, [ numberOfResponsesString ]);

    return (
        <>
            <SEO />
            <input type="hidden" id="gclid_field" name="gclid_field" onChange={(e) => { changeGclid(e.target.value); }} />
            <div className="wrapper">
                <div className="main">
                    <section className="main__hero">
                        <div className="main__container-outer">
                            <div className="main__content">
                                <div className="main__logo">
                                </div>
                                <div className="main__text">
                                    <div className="main__title">
                                        우리 아이에게<br /><span className="white">지구를 위한 변화를 만드는</span><br /><span className="white no-bg">특별한 경험을 선물하세요!</span>
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
                                <b>탄생, 돌, 어린이날, 첫 학교 입학</b><br /> 등 <b>특별한 날</b>을 <b>기념</b>해<br /><b>정기후원</b>을 <b>시작</b>해 보세요!
                                <p>
                                    <ul>
                                        <li>
                                            <b>아이의 이름으로 후원해 주시면,</b>
                                        </li>
                                        <li>
                                            ➊ 아이가 직접 환경 캠페인에 참여해 변화를 만드는 경험을 할 수 있습니다
                                        </li>
                                        <li>
                                            ➋ 우리 아이가 후원자로서 지구를 지키는 기쁨과 자부심을 느낄 수 있어요
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div className="main__form-donate">
                                <DonationModule
                                    market={'kr'}
                                    language={'ko_KR'}
                                    campaign={process.env.campaign}
                                    campaignId={envCampaignId}
                                    env={process.env.envParam}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="main__donation-asking-half right-image">
                        <div className="content-area">
                            <h1>더 나은 세상을 만드는 기쁨과<br />보람을 우리 아이와 나누어 보세요</h1>
                            <p className="align-left">이미 그린피스는 후원자님과 함께 수많은 변화를 이루어냈습니다.</p>
                            <p className="align-left">글로벌 해양조약이 체결되었고, 삼성과 롯데마트 등 거대 기업이 그린피스의 요구에 응답해 변화를 약속했습니다.</p>
                            <p className="align-left">이제 후원자님의 자녀에게도 지구를 위한 변화를 만드는 경험을 선물하세요.</p>
                            <p className="align-left">우리 아이가 살아갈 건강하고 깨끗한 미래를 그린피스와 함께 만들 수 있습니다.</p>
                            <a href="#form-section" className="to-form">후원하기</a>
                        </div>
                        <div className="image-wrap">
                            <div className="image-area">
                                <img src="https://gpseoulwebserver.co.kr/donation/child/api/story_image1.jpg" alt="자녀후원 스토리 어린이" />
                            </div>
                        </div>
                    </section>
                    <section className="main__donation-asking-half bg-green left-image">
                        <div className="image-wrap">
                            <div className="image-area">
                                <div className="main__activity-item-number">
                                    <span className="white">자녀 후원<br />인터뷰</span>
                                </div>
                                <img src="https://gpseoulwebserver.co.kr/donation/child/api/child_interview1.png" alt="자녀후원 인터뷰 이미지" className="pc" />
                                <img src="https://gpseoulwebserver.co.kr/donation/child/api/child_interview1-mobile.png" alt="자녀후원 인터뷰 이미지" className="mobile" />
                                <div className="chevron-right"></div>
                            </div>
                        </div>
                        <div className="content-area">
                            <h1 className="pc">돈보다 소중한 선물은 건강한 미래</h1>
                            <h1 className="mobile">돈보다 소중한 선물은<br />건강한 미래</h1>
                            <p className="align-left">올해 1월 1일, 소중한 아기가 태어났어요. 의사로 일하면서 항상 수많은 일회용품에 둘러싸여 살다보니, 환경에 대한 관심이 많았어요. 우리 아이가 건강히 숨쉬며 살아갈 수 있는 미래를 선물해 주고 싶어서 아이 이름으로 후원도 시작했죠.</p>
                            <p className="align-left">아이가 태어나면 하나라도 더 해주고 싶은 마음에 이것 저것 선물을 사주지만, 저는 무엇보다 좋은 환경을 물려주는 게 더 중요하다고 생각해요.</p>
                            <p className="align-left">더 중요한 건, 우리 아이들도 그 다음 세대에게 좋은 환경을 물려주고 싶어하는 어른으로 자라나는 거예요. 우리 어른들이 그런 마음을 물려줘야 한다고 생각해요.</p>
                            <p className="align-right font-sm">-이미린 후원자님-</p>
                        </div>
                    </section>
                    <section className="main__activity general">
                        <h1 className="pc">지구를 지키는 그린피스의 활동</h1>
                        <h1 className="mobile">지구를 지키는 <br />그린피스의 활동</h1>
                        <p className="align-left">그린피스는 환경파괴를 막기 위해 전 세계를 무대로 활발하게 활동하고 있습니다</p>
                        <div className="main__activity-container">
                            <div className="main__activity-item">
                                <img src="https://gpseoulwebserver.co.kr/donation/child/api/gp_act_1.jpg" alt="그린피스의 활동 - 기후위기 해결" />
                                <div className="main__activity-item-content">
                                    <div className="main__activity-item-number">
                                        <span>01</span>
                                    </div>
                                    <span className="main__activity-item-text darkblue">아이들이 건강하게 자랄 수 있는 지구를 위해 기후위기를 해결합니다</span>
                                </div>
                            </div>
                            <div className="main__activity-item">
                                <img src="https://gpseoulwebserver.co.kr/donation/child/api/gp_act_2.jpg" alt="그린피스의 활동 - 해양보호구역" />
                                <div className="main__activity-item-content">
                                    <div className="main__activity-item-number">
                                        <span>02</span>
                                    </div>
                                    <span className="main__activity-item-text darkblue">해양보호구역을 더 많이 만들어 고래와 거북이를 보호합니다</span>
                                </div>
                            </div>
                            <div className="main__activity-item">
                                <img src="https://gpseoulwebserver.co.kr/donation/child/api/gp_act_3.jpg" alt="그린피스의 활동 - 일회용 플라스틱을 줄이려는 과학조사 " />
                                <div className="main__activity-item-content">
                                    <div className="main__activity-item-number">
                                        <span>03</span>
                                    </div>
                                    <span className="main__activity-item-text darkblue">일회용 플라스틱을 줄이기 위해 과학 조사를 진행합니다</span>
                                </div>
                            </div>
                            <div className="main__activity-item">
                                <img src="https://gpseoulwebserver.co.kr/donation/child/api/gp_act_4.jpg" alt="그린피스의 활동 - 숲 지키기" />
                                <div className="main__activity-item-content">
                                    <div className="main__activity-item-number">
                                        <span>04</span>
                                    </div>
                                    <span className="main__activity-item-text darkblue">야생동물과 지역주민들의 안전한 삶을 위해 숲을 지킵니다</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main__activity gift">
                        <h1 className="align-center pc">어린이 후원자님을 위한 특별 선물을 드려요!</h1>
                        <h1 className="align-center mobile">어린이 후원자님을 위한<br /> 특별 선물을 드려요!</h1>
                        <div className="main__activity-container">
                            <div className="main__activity-item">
                                <img src="https://gpseoulwebserver.co.kr/donation/child/api/gift_image1.jpg" alt="그린피스 기후 동화책" />
                                <div className="main__activity-item-content">
                                    <span className="main__activity-item-text white">그린피스 기후 동화책과 꿀벌 뱃지를 보내드립니다.</span>
                                </div>
                            </div>
                            <div className="main__activity-item">
                                <img src="https://gpseoulwebserver.co.kr/donation/child/api/gift_image2.jpg" alt="그린피스 후원 확인증" />
                                <div className="main__activity-item-content">
                                    <span className="main__activity-item-text white">그린피스 후원 확인증을 드립니다.</span>
                                </div>
                            </div>
                            <div className="main__activity-item">
                                <img src="https://gpseoulwebserver.co.kr/donation/child/api/gift_image3.jpg" alt="그린피스 행사 초대" />
                                <div className="main__activity-item-content">
                                    <span className="main__activity-item-text white">가족들과 함께 하는 그린피스 행사에 우선 초대합니다.</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <footer>
                    <div className="footer__text">
                        <div className="footer__left">
                            <Image src="https://gpseoulwebserver.co.kr/asset/images/logo/Greenpeace_Logo_Black_SVG.svg" alt="Greenpeace" />
                            <p className="align-left">후원 완료와 동시에 첫 후원금이 결제됩니다. 정기 후원 결제일은 매월 10일이며, 결제가 되지 않은 경우 같은 달 15일, 20일, 27일 재결제 됩니다. <br /><br /> 자동이체의 경우 결제일이 공휴일, 주말에 겹치는 경우 그 다음 도래하는 은행 영업일에 결제됩니다. (*결제일 전날이 서울사무소 휴일인 경우 결제가 하루 지연될 수 있습니다.) 신용카드의 경우 휴일 여부와 상관 없이 결제일에 결제됩니다. 다만, 시스템 처리 과정에서 다음 영업일에 결제될 수 있습니다.</p>
                        </div>
                        <div className="footer__right">
                            <p className="align-left">14세 미만 후원자는 법정 대리인 동의 후 후원이 가능하며 14세~19세 미성년자일 경우 정기후원 3만원 이하, 일시후원 30만원 이하의 후원만 가능합니다. <br /><br />연말정산 소득공제 혜택을 받으실 수 있습니다. 가입 후 연말정산을 위한 개인정보를 꼭 입력해 주세요. 그린피스는 독립성을 지키기 위하여 정부, 기업의 후원은 받지 않습니다. <br /><br />기타 문의는 FAQ 참고 부탁드립니다. 또한 후원관리팀으로<br /> 이메일 help.kr@greenpeace.org 또는 <br />유선 문의 주세요. 02-3144-1997 (평일 오전 10시~오후 5시)</p>
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

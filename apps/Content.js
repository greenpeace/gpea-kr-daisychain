import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
  ulLineProps,
  linePropsLast
} from '@common/styles/components/contentStyle';
import Accordion from '@components/Accordion/Accordion';

import Image01 from './images/GP0STUHX5_Medium.jpg';
import Image02 from './images/general_page_content1.gif';
import Image03 from './images/template_test-content2.jpeg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  const faqItems = [
    {
      title: '씨앗 키트는 어떻게 받을 수 있나요?',
      content: (<p style={{padding:'10px 0'}}>그린피스 정기후원을 시작하신 분들에게 씨앗키트 1개를 보내 드립니다. <br />*선착순 200명, 출금 후 순차적 발송</p>)
    },
    {
      title: '씨앗 키트는 뭔가요? 어떻게 구성이 되었나요?',
      content: (<>
                  <p style={{padding:'10px 0'}}>집에서 간편하게 씨앗생활을 시작할 수 있는 피트펠릿(압축 배양토)과 펄프팟이 함께 구성된 키트입니다. <br />*구성: 씨앗 1종 + 피트펠릿 1개 + 펄프팟 1구</p>
                  <Image src={Image02} layout="fill" alt="Greenpeace" />
                </>)
    },
    {
      title: '어떤 씨앗을 보내주시나요? 씨앗을 직접 선택할 수는 없나요?',
      content: <>
                <p style={{padding:'10px 0'}}>물망초, 보리지, 노랑 코스모스, 메리골드, 천일홍- 5가지 씨앗 중 하나를 랜덤으로 발송해 드립니다. 모두 밀원식물이며, 실내의 빛만으로도 꽃을 피울 수 있기에, 다른 꽃에 비해 상대적으로 관리하기 더 용이합니다.</p>
              </>
    },
    {
      title: '현재 그린피스에 정기후원을 하고 있다면 받을 수 없나요?',
      content: (<>
                  <p style={{padding:'10px 0'}}>그린피스에 정기 후원을 하고 계시는 후원자님들께서는 3만원 이상 일시후원으로 참여해 주시는 분들께 씨앗 키트를 보내드립니다. <br />* 정기후원자가 아닌 경우 일시후원으로 참여해 주셔도 씨앗 키트가 전달되지 않습니다.</p>
                  <a href="https://supporter.ea.greenpeace.org/kr/s/donate/mid?campaign=school&donate_amt=s" target="_blank" rel="noreferrer">
                    <button style={{color:'blue', textDecoration:'underline'}}>일시후원하고 키트받기</button>
                  </a>
                </>)
    }
  ];

  return (
    <div>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        전 지구적 환경 문제로 신음하는 지구
      </Heading>

      <Text as="p" {...paragraphProps}>
        오늘 우리에게 닥친 환경 문제는 그 어느때보다 더 심각하고 긴급합니다. 기후위기, 해양 오염, 산림 파괴는 야생동물과 인간의 터전을 파괴하고 예측 불가능한 위협으로 다가오고 있습니다.
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="Greenpeace" />
      </Box>

      <Text as="p" {...paragraphProps}>
        하지만 아직 해결할 시간이 있습니다.
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        반세기 동안 지구를 지켜온 국제환경단체, 그린피스
      </Heading>

      <Text as="p" {...paragraphProps}>
        그린피스는 6개 대륙, 50개 이상의 지역에서 활동하며 지구에 긍정적인 변화를 만들고 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        북극과 남극 보호, 산림 보호, 해양 보호, 기후위기, 플라스틱 제로, 건강한 삶. 6가지 프로젝트를 최우선으로 지속 가능한 지구를 위해 활동합니다.
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        그린피스가 변화를 만드는 방법
      </Heading>

      <Text as="p" {...paragraphProps}>
        그린피스는 개인 후원자의 기부금으로만 운영되고 있습니다. 지구 환경을 보호하기 위해 여러분의 후원이 절실히 필요합니다. 여러분의 후원금으로 그린피스는 정부와 기업에 맞서 지구를 지켜내기 위해 멈추지 않고 활동할 수 있습니다.
      </Text>


      <ul>
        <Text as="li" {...ulLineProps}>
          <b>환경 범죄 폭로:</b> 아마존 숲을 괴롭히던 불법 금 채굴을 폭로하고, HD 현대건설기계에게서 보호구역 인근 중장비 판매 중단 선언을 이끌어냈습니다.
        </Text>
        <Text as="li" {...ulLineProps}>
          <b>글로벌 캠페인:</b> 플라스틱 오염을 멈추기 위해 국내외 기업의 플라스틱 생산과 사용을 규제할 수 있는 '글로벌 플라스틱 협약' 체결을 촉구하고 있습니다.
        </Text>
        <Text as="li" {...linePropsLast}>
          <b>기업 및 정부 모니터링:</b> 삼성전자가 2050년까지 재생에너지 전력 사용 100%를 포함해 탄소중립을 달성하겠다는 목표를 발표했습니다. 그린피스는 정부와 기업의 약속을 지속적으로 감시하고 있습니다.
        </Text>
        <Text as="li" {...linePropsLast}>
          <b>생물 다양성 보존:</b> 지난 20년 간, 그린피스와 전 세계 550만 명의 요구로 해양 보호구역 지정을 위한 국제 조약이 체결되어 2030년까지 해양의 최소 30%를 보호하기 위한 토대가 마련되었습니다.
        </Text>
      </ul>

      <Box {...paragraphProps}>
        <Image src={Image02} layout="fill" alt="Greenpeace" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`} style={{marginTop:30}}>
        지구를 위한 변화는 긴 시간의 노력이 필요합니다.
      </Heading>

      <Text as="p" {...paragraphProps}>
        그린피스는 지난 50년 동안 오직 개인 후원자의 후원금만으로 스스로 목소리를 낼 수 없는 동물들과 자연을 대변해 지구를 위한 변화를 만들어왔습니다. 
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`} style={{marginTop:30}}>
        한 사람의 힘으로는 힘들지만, 우리 모두가 함께라면 해낼 수 있습니다.
      </Heading>

      <Text as="p" {...paragraphProps}>
        그린피스는 지난 50년 동안 오직 개인 후원자의 후원금만으로 스스로 목소리를 낼 수 없는 동물들과 자연을 대변해 지구를 위한 변화를 만들어왔습니다. 
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image03} layout="fill" alt="Greenpeace" />
      </Box>

      <Text as="p" {...paragraphProps}>
        지구를 위한 변화 만들기<br/>여러분의 후원으로 그린피스는 전 세계 환경을 보호할 수 있습니다
      </Text>
      
      {/* <Accordion headerTitle={<><Heading {...headingProps} color={`theme.${themeInterests}`}>자주 하는 질문</Heading></>} items={faqItems} />
      
      <Heading {...headingProps} color={`theme.${themeInterests}`} style={{marginTop:30}}>
        지구를 위한 변화는 긴 시간의 노력이 필요합니다.
      </Heading>

      <Text as="p" {...paragraphProps}>
        그린피스는 전 세계 57개국에서 각 지역 시민들의 후원으로 활동하고 있습니다. 2010년대 유럽에서 꿀벌을 해치는 살충제인 네오니코티노이드의 야외 사용을 막아낸 경험을 토대로, 한국의 벌이 건강한 환경을 조성하겠습니다.
      </Text> */}

    </div>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);

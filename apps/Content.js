import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import Accordion from '@components/Accordion/Accordion';

import Image01 from './images/beestro-seed.png';
import Image02 from './images/beestro-seedkit.png';

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
        작지만 위대한 벌의 날갯짓에 힘을 보태주세요
      </Heading>

      <Text as="p" {...paragraphProps}>
        꿀벌과 야생벌은 기후변화, 살충제, 전염병 등 다양한 원인으로 사라지고 있습니다. 그런데 알고 계셨나요? 다양한 꽃가루를 먹은 꿀벌은 그렇지 못한 꿀벌보다 최대 2배 더 오래 산다는 연구가 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        벌이 살아남을 수 있도록, 먹이가 되는 꽃을 심어주세요.
      </Text>

      <Text as="p" {...paragraphProps}>
        국제환경단체 그린피스는 벌을 포함한 수분매개곤충을 지키고 안전한 생태계를 조성하기 위해 활동하고 있습니다.
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        벌을 지키는 희망의 씨앗을 드립니다
      </Heading>

      <Text as="p" {...paragraphProps}>
        벌이 좋아하는 꽃의 씨앗을 직접 심어보면서 사라져가는 벌을 떠올려보세요. 이 꽃은 벌 뿐 아닌 나비도 즐겨 찾는답니다! 
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="Greenpeace" />
      </Box>
      
      <Accordion headerTitle={<><Heading {...headingProps} color={`theme.${themeInterests}`}>자주 하는 질문</Heading></>} items={faqItems} />
      
      <Heading {...headingProps} color={`theme.${themeInterests}`} style={{marginTop:30}}>
        국제환경단체 그린피스는?
      </Heading>

      <Text as="p" {...paragraphProps}>
        그린피스는 전 세계 57개국에서 각 지역 시민들의 후원으로 활동하고 있습니다. 2010년대 유럽에서 꿀벌을 해치는 살충제인 네오니코티노이드의 야외 사용을 막아낸 경험을 토대로, 한국의 벌이 건강한 환경을 조성하겠습니다.
      </Text>

    </div>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);

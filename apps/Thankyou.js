import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
  lineProps
} from '@common/styles/components/contentStyle';
import { useSelector } from 'react-redux';

const Thankyou = () => {
  const theme = useSelector((state) => state?.theme?.data);
  const signup = useSelector((state) => state?.signup?.data);
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps}>지속적인 관심을 부탁드립니다.</Heading>

      <Text as="p" {...paragraphProps}>
      여러분의 서명으로 농림축산식품부, 환경부 등 다양한 정부 부처가 꿀벌 보호 활동에 적극 나서도록 바꿔나갈 것입니다. 이를 위해 국내 생태계 전문가들과 함께 과학적인 근거로 정부를 설득하겠습니다. 
      </Text>

      <Heading {...headingProps}>꿀벌 보호 활동을 위한 {signup.LastName}님의 후원이 꼭 필요합니다.</Heading>

      <Text as="p" {...paragraphProps}>
      그린피스는 전 세계 50개국에서 각 지역 시민들의 후원으로 활동하고 있습니다. 2010년대 유럽에서 꿀벌을 해치는 살충제 네오니코티노이드의 야외 살포를 막아낸 경험을 토대로, 한국에서도 벌 문제 해결에 앞장서겠습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      지금 후원을 시작해 사라지는 꿀벌을 지키기 위한 활동에 함께해 주세요!
      </Text>

      <Text as="p" {...paragraphProps}>
      지금 후원을 시작해 주시면,
      </Text>

      <Text as="li" {...lineProps}>
      꿀벌과 야생벌 멸종을 막기 위한 대규모 시민운동을 구축할 수 있습니다.
      </Text>

      <Text as="li" {...lineProps}>
      꿀벌과 야생벌 멸종의 원인을 과학적으로 분석하고, 해결할 수 있는 방법을 연구해 사회에 알릴 수 있습니다.
      </Text>

      <Text as="li" {...lineProps}>
      법적 절차를 확인해 정부에 책임을 묻고, 야생벌 멸종을 멈출 수 있습니다.
      </Text>

      <Text as="li" {...lineProps}>
      시민들이 꿀벌과 야생벌의 가치와 그 위기 상황을 알 수 있도록 다양한 콘텐츠를 제작하고 배포할 수 있습니다. 
      </Text>

    </>
  );
};

export default Thankyou;

import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import { useSelector } from 'react-redux';

const Thankyou = () => {
  const theme = useSelector((state) => state?.theme?.data);
  const signup = useSelector((state) => state?.signup?.data);
  const themeInterests = theme.interests;

  return (
    <>
      <Heading {...headingProps}>여러분의 참여로 아마존을 지킬 수 있습니다.</Heading>

      <Text as="p" {...paragraphProps}>
      그린피스 브라질 사무소는 현지에서 원주민들을 지원하고 있으며 그린피스 서울사무소 또한 아마존 불법 금 채굴의 심각성을 알리고 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      지구의 하나뿐인 보물, 아마존을 지키는 그린피스의 활동에 여러분의 후원으로 함께해주세요.
      </Text>

      <Text as="p" {...paragraphProps}>
      불법 금 채굴에 중장비가 동원되는 것을 막도록 판매 기업에게 요구하고, 원주민과 야생동물의 터전인 아마존을 지키는 데 여러분의 든든한 지원이 필요합니다.
      </Text>

      <Heading {...headingProps}>그린피스이기 때문에, 어디서나 당당하게 목소리를 높이고 있습니다.</Heading>

      <Text as="p" {...paragraphProps}>
      그린피스는 오직 소중한 시민 개인의 후원금만으로 아마존 보호 캠페인을 진행하고 있습니다. 기업의 정부와 후원 없이, 오로지 시민의 힘으로 아마존을 지키는 데 힘을 보태주세요.
      </Text>
 
    </>
  );
};

export default Thankyou;

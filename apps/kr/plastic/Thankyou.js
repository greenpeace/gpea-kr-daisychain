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
      <Heading {...headingProps}>일회용 플라스틱 없는 대형마트와 지구를 위해 행동해주셔서 감사합니다.</Heading>

      <Text as="p" {...paragraphProps}>
      여러분의 서명은 국내 대형마트들의 변화를 요구하는 데 큰 힘이 될 것입니다.
      </Text>

      <Heading {...headingProps}>더 강력한 캠페인을 위해 후원으로 함께해주세요.</Heading>

      <Text as="p" {...paragraphProps}>
      그린피스는 오직 소중한 시민 개인의 후원금만으로 일회용 플라스틱 감축 캠페인을 진행하고 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      지금 그린피스를 후원하고 일회용 플라스틱으로부터 지구를 지켜주세요!
      </Text>

    </>
  );
};

export default Thankyou;

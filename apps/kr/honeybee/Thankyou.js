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
      <Heading {...headingProps}>지속적인 관심을 부탁드립니다.</Heading>

      <Text as="p" {...paragraphProps}>
      농림축산식품부, 환경부, 국토교통부 등 다양한 정부 부처가 꿀벌 보호 활동에 적극 나서도록 지속적인 관심이 필요합니다.
      </Text>

      <Heading {...headingProps}>적극적인 참여가 꼭 필요합니다.</Heading>

      <Text as="p" {...paragraphProps}>
      정부가 꿀벌 보호활동에 적극 나설 수 있도록 그린피스는 시민들과 함께 캠페인을 지속할 것입니다. 
그린피스는 오직 소중한 시민 개인의 후원금만으로 꿀벌을 지키기 위한 캠페인을 진행하고 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      지금 후원을 시작해 점점 사라지는 꿀벌들을 지키기 위한 활동에 함께해주세요!
      </Text>

    </>
  );
};

export default Thankyou;

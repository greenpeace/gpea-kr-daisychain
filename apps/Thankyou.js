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
      <Heading {...headingProps}>여러분의 참여로 공해보호를 위한 역사적인 쾌거! 
      글로벌 해양조약이 마침내 체결되었습니다
      </Heading>

      <Text as="p" {...paragraphProps}>
      현재 그린피스는 2030년까지 공해의 30%이상을 해양보호구역으로 지정하기 위해 다양한 활동을 펼치고 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      여러분의 더 큰 힘이 필요합니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      그린피스는 오직 소중한 시민 개인의 후원금만으로 해양 보호 캠페인을 진행하고 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      지금 후원을 통해서 해양보호 캠페인에 더욱 큰 힘을 실어주세요!
      </Text>
 
    </>
  );
};

export default Thankyou;

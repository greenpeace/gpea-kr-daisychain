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
      <Heading {...headingProps}>여러분의 참여로 바다 파괴를 막고, 고래를 지킬 수 있습니다.</Heading>

      <Text as="p" {...paragraphProps}>
      그린피스는 지난 50년 동안 고래를 보호하기 위해 거대한 포경선에 맞서고, 바다를 지키기 위한 활동을 지속해왔습니다.
      </Text>

      <Heading {...headingProps}>지금 후원을 시작해 주시면,</Heading>

      <Text as="li" {...lineProps}>
      바다를 파괴하는 화석연료 기업에 맞서 싸울 수 있는 안정적인 자금 기반을 확보할 수 있습니다.
      </Text>

      <Text as="li" {...lineProps}>
      우드사이드에 맞서 고래와 바다를 보호하기 위한 대규모 시민운동을 구축할 수 있습니다.
      </Text>

      <Text as="li" {...lineProps}>
      우드사이드의 위험한 지진 발파 및 심해 가스 시추 계획을 조사하고 투자자와 대중에게 폭로할 수 있습니다.
      </Text>

      <Text as="li" {...lineProps}>
      법적 절차에 따라 우드사이드와 호주 정부에 책임을 묻고 우드사이드의 해양 파괴를 멈출 수 있습니다. 
      </Text>

      <Text as="p" {...paragraphProps}>
      그린피스에 후원을 시작해 독립적인 환경운동이 계속될 수 있도록 함께해 주세요!
      </Text>
    </>
  );
};

export default Thankyou;

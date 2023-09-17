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
      <Heading {...headingProps}>여러분의 참여로 기후위기를 막는 캠페인 활동이 성공할 수 있습니다.</Heading>

      <Text as="p" {...paragraphProps}>
        여러분의 동참은 정부와 국회에 기후위기 대응을 위한 구체적인 목표 설정을 요구하는데 커다란 힘이 될 것입니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        지금 후원을 시작해 기후위기를 막기 위한 활동에 함께해 주세요!
      </Text>

      <Text as="p" {...paragraphProps}>
        지금 후원을 시작해주시면,
      </Text>

      <Text as="li" {...lineProps}>
        기후위기를 막기 위한 대규모 시민운동을 구축할 수 있습니다.
      </Text>

      <Text as="li" {...lineProps}>
        기후재난의 원인을 과학적으로 분석하고, 해결책을 연구해 알릴 수 있습니다.
      </Text>

      <Text as="li" {...lineProps}>
        법적 절차를 확인해 기업과 정부, 국회에 책임을 묻고, 기후위기를 막을 수 있습니다.
      </Text>
    </>
  );
};

export default Thankyou;

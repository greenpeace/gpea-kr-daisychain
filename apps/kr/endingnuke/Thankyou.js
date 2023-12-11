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
      <Heading {...headingProps}>지속적인 관심을 부탁 드립니다.</Heading>

      <Text as="p" {...paragraphProps}>
        그린피스는 한국 정부에 운영허가 기준을 미달하는 기존의 노후원전들을 단계적으로 폐쇄하고, 재생가능에너지 확대와 에너지효율 향상을 중심으로 운영되는 에너지 전환을 요구하고 있습니다.
      </Text>

      <Heading {...headingProps}>{`캠페인 활동을 지속하기 위해 ${signup?.LastName}님의 후원이 꼭 필요합니다.`}</Heading>

      <Text as="p" {...paragraphProps}>
        여러분의 후원은 100% 재생에너지 전환의 신속한 실현과 기후위기 대응 캠페인을 성공적으로 이끌어갈 수 있는 큰 힘이 됩니다. 보다 지속적인 참여를 원하신다면, 그린피스의 후원자가 되어주세요!
      </Text>

      {/* <Text as="li" {...lineProps}>
        기후위기를 막기 위한 대규모 시민운동을 구축할 수 있습니다.
      </Text> */}
    </>
  );
};

export default Thankyou;

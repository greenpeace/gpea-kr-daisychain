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
        그린피스는 한국 정부에 신규 원전 설치 계획을 중단하고 안전 규제가 허술한 기존의 노후 원전들을 단계적으로 폐쇄를 하면서, 재생가능에너지 확대와 에너지효율 향상을 중심으로 운영되는 시스템으로의 전환을 요구하고 있습니다.
      </Text>

      <Heading {...headingProps}>{`캠페인 활동을 지속하기 위해 ${signup?.LastName}님의 후원이 꼭 필요합니다.`}</Heading>

      <Text as="p" {...paragraphProps}>
        지금 후원을 시작해주시면,
      </Text>

      {/* <Text as="li" {...lineProps}>
        기후위기를 막기 위한 대규모 시민운동을 구축할 수 있습니다.
      </Text> */}
    </>
  );
};

export default Thankyou;

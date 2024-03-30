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
      <Heading {...headingProps}>산림 보호 활동을 위해 OOO님의 후원이 꼭 필요합니다.</Heading>

      <Text as="p" {...paragraphProps}>
        한국 정부의 잘못된 정책을 막고 우리의 숲과 나무를 지켜내겠습니다.<br/>
        산림을 파괴하는 비용을 산림을 지키는 방향으로 쓰일 수 있도록 노력하겠습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        그린피스는 전 세계 50여 개 국가에서 시민의 후원만으로 활동하고 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        지금 후원을 시작해 사라져가는 산림을 지키기 위한 활동에 함께해 주세요!
      </Text>

      <Heading {...headingProps}>지금 후원을 시작해 주시면,</Heading>

      <Text as="li" {...lineProps}>
        산림 파괴 현장을 직접 조사할 수 있습니다.
      </Text>

      <Text as="li" {...lineProps}>
        멸종위기 동물의 서식처를 지키기 위한 활동을 시작할 수 있습니다.
      </Text>

      <Text as="li" {...lineProps}>
        과학적 근거를 토대로 한국 정부에 정책 변화를 요구할 수 있습니다.
      </Text>

      <Text as="li" {...lineProps}>
        우리나라 숲이 처한 위기를 대중에 알릴 수 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        환경부에 파괴된 생태계를 복원하고 보호지역을 지키는 정책을 요구할 수 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        그린피스와 함께 대한민국의 숲을 지켜주세요!
      </Text>

    </>
  );
};

export default Thankyou;

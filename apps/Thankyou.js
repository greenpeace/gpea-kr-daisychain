import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
  lineProps,
  linePropsLast
} from '@common/styles/components/contentStyle';
import { useSelector } from 'react-redux';

const Thankyou = () => {
  const theme = useSelector((state) => state?.theme?.data);
  const signup = useSelector((state) => state?.signup?.data);
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps}>{`산림 보호 활동을 위해 ${signup.LastName}님의 후원이 꼭 필요합니다.`}</Heading>

      <Text as="p" {...paragraphProps}>
       정부의 잘못된 정책을 바로잡고, 우리에게 소중한 자연 생태계를 지켜낼 수 있도록 후원으로 동참해주세요.
      </Text>

      <Text as="b" {...paragraphProps}>
        지금 후원을 시작해 주시면,
      </Text>

      <Text as="li" {...lineProps}>
       보호지역 파괴 현장을 항공 위성 카메라 및 과학조사를 통해서 밝혀내고 폭로할 수 있습니다.
      </Text>

      <Text as="li" {...lineProps}>
       보고서 발간 등 미디어 활동 및 시민 활동을 통해 정부에 시민들의 목소리를 전달합니다.
      </Text>

      <Text as="li" {...lineProps}>
       시민대상 오프라인 행사를 열고, 지역 단체와 연대해 숲을 지키기 위한 커뮤니티 활동을 강화합니다.
      </Text>

      <Text as="li" {...linePropsLast}>
       국제 생물다양성 협약을 정부가 제대로 이행하는지 시민봉사자를 구성하여 지속적 관리 감독 활동을 펼칠 수 있습니다.
      </Text>
      
      <Text as="b" {...paragraphProps}>
        그린피스가 산림보호를 위해 걸어온 길
      </Text>

      <Text as="li" {...lineProps}>
       2015년, 3M 지속가능한 제지 구매 방침 선언
      </Text>

      <Text as="li" {...lineProps}>
       2016년, 아마존 초대형댐 건설 중단
      </Text>

      <Text as="li" {...lineProps}>
       2018년, 인도네시아 산림보호 캠페인 진행
      </Text>

      <Text as="li" {...lineProps}>
       2020년, 첨단과학기술로 파푸아열대우림 파괴 고발
      </Text>

      <Text as="li" {...lineProps}>
       2023년, HD현대건설기계, 아마존 불법 금 채굴에 동원되는 중장비 판매 중단결정
      </Text>

      <Text as="li" {...linePropsLast}>
       2024년, 이케아의 보호지역 내 숲 파괴 폭로 
      </Text>

      <Text as="p" {...paragraphProps}>
        그린피스와 함께 숲을 지켜주세요!
      </Text>
    </>
  );
};

export default Thankyou;

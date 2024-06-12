import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
  captionProps,
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
      <Heading {...headingProps}>지금 후원을 시작해 우리나라의 화석연료 의존도를 줄이고 재생에너지를 확대하는 활동에 함께해 주세요!</Heading>

      <Text as="b" {...paragraphProps}>
      지금 후원을 시작해 주시면
      </Text>
      <ul>
        <Text as="li" {...lineProps}>
        메탄이 누출되는 국내 및 세계 주요 LNG 생산-운송-발전 시설을 인공위성 촬영 등 과학조사를 통해 밝혀낼 수 있습니다.
        </Text>

        <Text as="li" {...lineProps}>
        국내 반도체 산업의 탈탄소화를 위해 재생에너지 전력 조달이 가능하다는 구체적인 해결책을 제시하는 연구 보고서를 발간 할 수 있습니다.
        </Text>

        <Text as="li" {...lineProps}>
        한국 및 동아시아 기업들의 탄소 감축 성과와 활동을 모니터하고 비교 및 평가해 기업의 기후대응을 촉구할 수 있습니다.
        </Text>

        <Text as="li" {...lineProps}>
        지역의 재생에너지 확대를 지지하고 기업의 그린워싱을 견제하는 시민 운동을 조직할 수 있습니다.
        </Text>

        <Text as="li" {...linePropsLast}>
        한국이 국제사회에 약속한 메탄 감축 선언을 지킬 수 있도록 신규 LNG 발전 건설을 막을 수 있습니다. 
        </Text>
      </ul>

      <Heading {...headingProps}>그린피스가 기업의 기후행동과 기후위기 대응을 앞당기기 위해 걸어온 길</Heading>
      <ul>
        <Text as="li" {...lineProps}>
        2018년, 삼성전자 글로벌(유럽, 미국, 중국) 사업장 100% 재생에너지 전력 사용 선언
        </Text>
        <Text as="li" {...lineProps}>
        2021년, 기업의 직접 재생에너지 전력 구매를 허용하는 전기사업법 개정안(직접전력구매계약 PPA) 국회 본회의 통과 
        </Text>
        <Text as="li" {...lineProps}>
        2021년, 한국정부의 해외 석탄발전 투자 중단 선언
        </Text>
        <Text as="li" {...lineProps}>
        2021년, ICT(정보·통신·기술) 기업 대상 동아시아 지부 공동 캠페인 시작
        </Text>
        <Text as="li" {...lineProps}>
        2023년, 그린워싱 방지 및 기업의 투명한 정보 공개를 위한 기후공시 개정안 발의 
        </Text>
        <Text as="li" {...linePropsLast}>
        2024년, 용인 첨단 시스템반도체 클러스터 LNG발전 퇴출 캠페인 시작
        </Text>
      </ul>
    </>
  );
};

export default Thankyou;

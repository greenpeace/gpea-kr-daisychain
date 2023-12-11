import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text, color } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import Image01 from './images/endingnuke-content01.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <div>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        원전은 결코 안전하지 않습니다
      </Heading>

      <Text as="p" {...paragraphProps}>
        전 세계 원전 밀집도 1위, 개별 원전 부지별 밀집도 및 규모 세계 1위, 원전 규모 대비 30km 반경 내 인구수 세계 1위 - 우리나라 원전의 불명예 3관왕입니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        한국은 지진 안전지대가 아닙니다. 노후한 원자력발전소의 격납건물과 안전 관련 설비들에 내진 능력이 없거나 설계 기준 미달의 부적합한 장치가 시공되어 있어, 지진 발생 시 사고로 직결될 수 있는 위험성을 갖고 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        산불 위험 지대인 울진은 이미 아시아 최대 규모의 원전 부지입니다. 수만년이 넘는 저장 기간 중 언제든 방사선 재난의 원인이 될 수 있는 사용후핵연료 저장 용량은 이미 포화 상태입니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        우리에겐 또 다른 원전 사고를 막을 수 있는 시간이 있습니다. 그래서, 지금 우리가 내릴 선택이 더욱 중요합니다.
      </Text>


      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="Greenpeace" />
      </Box>

      {/* <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/DJjSyJCFcRQ"
        title="후쿠시마 원전의 방사성 오염수 방출 계획"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}

      {/* <Heading
        {...headingProps}
        color={`theme.${themeInterests}`}
        marginTop="30"
      >
        또 어떤 소중한 생명을 잃어야 하나요?
      </Heading> */}

      <Text as="p" {...paragraphProps}>
        {`원전 제일주의로는 우리의 안전을 장담할 수 없습니다. 그린피스는 '원전 말고 안전' 캠페인을 통해 원자력발전소 기술적 결함, 원자력안전법과 관련 규제 사각지대에 놓인 안전 문제 해결에 기여하고 있습니다.`}
      </Text>

      <Text as="p" {...paragraphProps}>
        한국 정부가 ‘원전’ 말고 ‘안전’을 선택할 수 있도록 함께 동참해주세요!
      </Text>

    </div>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);

import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
  captionProps,
  lineProps,
  linePropsLast
} from '@common/styles/components/contentStyle';

import Image01 from './images/reboot-content1.jpg';
import Image02 from './images/yonggitest-content1-0530.jpg';
import Image03 from './images/yonggitest-content1-0530.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
      '천연'가스가 깨끗하다는 말은 거짓말입니다.
      </Heading>

      <Text as="p" {...paragraphProps}>
      천연가스로 알려진 LNG의 주성분은 메탄입니다. 메탄은 이산화탄소의 80배 이상에 달하는 온실효과를 일으켜 지구를 빠르게 가열시킵니다. 최근 메탄의 농도는 관측 이래 가장 가파르게 증가하고 있습니다.
      </Text>
      
      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
      정부는 연료의 생산-수송-사용 모든 과정에서 메탄을 내뿜는 LNG 발전소 30여 기를 2036년까지 새로 건설할 계획을 가지고 있습니다.
      </Heading>

      <Text as="p" {...paragraphProps}>
      심지어 글로벌 경쟁력 확보를 위해 재생에너지 전력이 필수인 용인 시스템반도체 산업단지에 LNG 6기를 추가로 지을 예정입니다. 
      </Text>

      <Text as="p" {...paragraphProps}>
      2030년까지 메탄을 30% 줄이고 재생에너지를 3배를 확대하겠다고 한국 정부가 국제 사회에 약속한 것과 정면으로 반대되는 결정입니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      신규 LNG 발전소는 온실가스를 배출해 이상기후를 더욱 악화시키고,  이 피해는 고스란히 힘없는 시민들이 가장 먼저 받게 될 것입니다.
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image02} layout="fill" alt="강원도 대형 산불 진압 현장(2019년 4월)" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
      그린피스는 정부에 재생에너지 중심의 ‘탄소 제로’ 용인 시스템반도체 클러스터 조성을 요구합니다. 
      </Heading>

      <Text as="p" {...paragraphProps}>
      기후위기를 가속화하지 않고, 시민에게도 안전하며, 글로벌 산업 경쟁력에도 이로운 재생에너지를 반도체 산업에서 사용할 수 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      지금, 그린피스와 함께 한국 정부에 요구해 주세요. 
      </Text>

      <Text as="p" {...paragraphProps}>
      그린피스는 2024년 말까지 1만 명의 시민들의 서명을 모아 산업통상자원부 장관에게 전달하고  변화를 요구할 것입니다. 올해 안에 1만 명의 시민들이 모일 수 있도록 서명으로 동참해 주세요!
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image03} layout="fill" alt="“출구” : 러시아 코추베브스카야 풍력 발전소를 배경으로 한 재생에너지 캠페인 활동(2023년 4월)" />
      </Box>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);

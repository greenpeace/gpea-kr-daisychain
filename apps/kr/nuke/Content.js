import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import Image01 from './images/nuke20230724-content01.jpg';
import Image02 from './images/nuke20230724-content02.jpg';
import Image03 from './images/nuke20230724-content03.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        35만 2천 2십 1명의 시민 서명
      </Heading>

      <Text as="p" {...paragraphProps}>
        2023년 7월 5일, 그린피스는 35만 2천 2십 1명의 시민 여러분의 목소리를 신문 광고를 통해 대한민국 정부에 전달했습니다.
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="Greenpeace" />
      </Box>

      <Text as="p" {...paragraphProps}>
        2019년 6월부터 2023년 6월까지 총 35만 2021명의 시민이 그린피스를 통해 오염수 방류 반대 서명에 동참해주셨습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        앞서 2020년에는 시민 8만 명의 오염수 반대 서명을 한국과 일본 정부에 전달했습니다. 이듬해인 2021년에는 일본과 한국 시민들의 반대 서명을 직접 일본 정부에 전달하기도 했습니다.
      </Text>

      {/* <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/DJjSyJCFcRQ"
        title="후쿠시마 원전의 방사성 오염수 방출 계획"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}

      {/* <Heading {...headingProps} color={`theme.${themeInterests}`}>
        您願意聯署加入守護海洋行列嗎？
      </Heading>

      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="Greenpeace" />
      </Box> */}

      <Heading
        {...headingProps}
        color={`theme.${themeInterests}`}
        marginTop="30"
      >
        그린피스의 캠페인은 앞으로도 계속 됩니다.
      </Heading>

      <Text as="p" {...paragraphProps}>
        그린피스는 1996년부터 후쿠시마 원전의 안전 문제를 제기하는 캠페인을 진행했습니다. 2011년 원전 사고 발생 11일 만에 후쿠시마 현장을 찾아 방사선 조사를 실시하고, 대피령이 내려지지 않은 지역의 시민들이 위험해 처했다는 사실을 전 세계에 알렸습니다. 작년까지 약 12년 간 50회 이상의 현지 방사선 조사를 진행하고, 총 12개의 분석 보고서를 발표했습니다.
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image02} layout="fill" alt="Greenpeace" />
      </Box>

      <Text as="p" {...paragraphProps}>
        그린피스는 후쿠시마에서 향후 진행될 방사선 영향 평가의 준비에 착수할 것입니다. 2016년 후쿠시마 해저 조사 이후 거의 10여년 만에 이뤄질 두번째 해양 방사선 조사에는 다양한 과학 분야 전문가들의 자문과 최신 기술이 도입될 것입니다.
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        오염수 해양 방류는 시민 행동의 끝이 아닌 시작
      </Heading>

      <Text as="p" {...paragraphProps}>
        후쿠시마 오염수가 해양에 방류되기 전까지 우리는 방류 반대 활동을 이어가고, 우리의 의견을 한국 정부에 개진해야 합니다.
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image03} layout="fill" alt="Greenpeace" />
      </Box>


      <Text as="p" {...paragraphProps}>
        그린피스는 후쿠시마 뿐만 아니라 우크라이나의 초르노빌 원전 지역에 대한 방사선 조사도 이어갈 예정입니다. 그린피스는 약 60년 전 진행된 핵실험으로 여전히 고통 받는 태평양 도서국 등 원전이 남긴 재난의 참상이 있는 곳으로 향할 것입니다.
        이것이 지난 반세기 넘는 시간 동안 시민들과 함께 수많은 캠페인 성과를 쌓아온 그린피스의 역할입니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        앞으로도 그린피스의 캠페인 활동에 많은 여러분의 관심과 참여를 부탁드립니다.
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);

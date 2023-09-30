import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text, color } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import Image01 from './images/ce-20230917-content01.jpg';
import Image02 from './images/ce-20230917-content02.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <div>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        이상기후로 한반도가 겪어낸 재앙
      </Heading>

      <Text as="p" {...paragraphProps}>
        이상기후로 인한 재앙은 점점 자주, 더 크게 일어나고 있습니다. 특히 취약계층은 생명과 주거에 심각한 피해를 입고 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        2023 - 7월, 지구 표면과 해수면 평균기온이 관측이래 가장 높았던 달 (세계기상기구 WMO)
      </Text>

      <Text as="p" {...paragraphProps}>
        2022 - 동해안 대형 산불로 서울시 면적 3분의 1 산림 피해
      </Text>

      <Text as="p" {...paragraphProps}>
        2020 - 54일간 역대 최장 장마로 42명 숨지거나 실종
      </Text>
      
      <Text as="p" {...paragraphProps}>
        2018 - 111년만 최고 더위, 폭염으로 약 315만 마리 가축 폐사, 28명 사망
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

      <Heading
        {...headingProps}
        color={`theme.${themeInterests}`}
        marginTop="30"
      >
        또 어떤 소중한 생명을 잃어야 하나요?
      </Heading>

      <Text as="p" {...paragraphProps}>
        정부의 미흡한 에너지 정책이 기후위기를 부추기고 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        1990년에 약 5.8톤이었던 한국의 1인당 배출량은 2016년에는 12.1톤으로, 두 배 이상 가파르게 증가했습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        2022년, 서울 관악구 신림동 반지하방, 일가족 세 명이 갑자기 불어난 빗물에 현관문을 열지 못해 익사하는 안타까운 사고가 있었습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        늘어난 탄소배출량만큼 이상기후는 빈번해졌고, 우리가 잃은 소중한 생명도 늘어가고 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        이제 비바람으로 무너지는 것은 건물 간판이나 가로수가 아닌, 우리의 삶이 될 수 있는 현실입니다.
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image02} layout="fill" alt="Greenpeace" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        매년 심각해지는 이상기후, 이대로 괜찮은 걸까요?
      </Heading>

      <Text as="p" {...paragraphProps}>
        대한민국 정부와 국회는 기후 위기에 적극적으로 대응해 기후 재앙의 원인인 온실 가스 감축에 나서야 합니다. 국민들이 기후위기로부터 안전한 사회에서 살 수 있도록 그린피스와 함께 요구해주세요.
      </Text>

    </div>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);

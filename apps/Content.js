import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
  captionProps,
  lineProps
} from '@common/styles/components/contentStyle';

import Image01 from './images/woodside-content01-20230816.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        대자연의 호주, 서쪽 바다에 불편한 손님이 찾아왔습니다.
      </Heading>

      <Text as="p" {...paragraphProps}>
        {"호주의 거대 화석연료 기업 '우드사이드'는 고래가 이동하는 길목을 막고, 곧 화석연료 탐사를 시작합니다."}
      </Text>

      <Text as="p" {...paragraphProps}>
        {"바닷속에서 이루어지는 것은 '탄성파 탐사'. 고래가 다치거나 청력을 잃을 수 있는, 매우 위험하고 파괴적인 탐사입니다."}
      </Text>
      
      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="Greenpeace" />
      </Box>

      <Text as="p" {...paragraphProps}>
        그린피스는 고래의 고통을, 바다의 파괴를 방관하고 있는 호주 정부와 기업을 압박하고 있습니다. 고래와 바다를 지키기 위해, 그린피스는 여러분의 목소리가 필요합니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        포경 반대 활동부터 지금 호주에 이르기까지, 50년동안 그린피스는 바다를 보호해왔습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        지금 바로 여러분의 참여로 고래가 사는 바다를 파괴하는 가스 채굴을 막을 수 있습니다.
      </Text>

    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);

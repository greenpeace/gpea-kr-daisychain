import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
  captionProps,
  lineProps
} from '@common/styles/components/contentStyle';

import Image01 from './images/amazon-content01.jpg';
import Image02 from './images/amazon-content02.jpg';
import Image03 from './images/amazon-content03.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        활기찬 생명으로 가득찬 아마존을 돌려주세요!
      </Heading>

      <Text as="p" {...paragraphProps}>
      수백 년 동안 아마존을 지켜온 원주민 공동체. 어느 날, 부족 사람들이 수은 중독으로 고통받기 시작했습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      무분별한 불법 금 채굴로 마실 물은 수은으로 오염된 흙탕물이 되었고, 단단했던 땅에선 더이상 생명이 자라지 않습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      브라질 보우소나루 정권(2019~2021) 4년 동안, 아마존에 살고 있는 야노마미 부족의 어린이 570명은 불법 금 채굴로 인한 수은과 말라리아, 설사, 기형으로 이른 나이에 세상을 떠났습니다.
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="Greenpeace" />
      </Box>
 
      <Text as="p" {...paragraphProps}>
      브라질 정부는 이 상황을 알고 있지만 해결하는 데 어려움을 겪고 있습니다. 이를 틈타 여러 업자들은 수많은 야생동물과 원주민의 죽음을 외면하고 이익을 좇아 채굴량을 늘리고 있습니다.
      </Text>
 
      <Box {...paragraphProps}>
        <Image src={Image02} layout="fill" alt="Greenpeace" />
      </Box>

      <Text as="p" {...paragraphProps}>
      이제 멈춰야 합니다. 울창한 숲과 건강하던 원주민의 삶을 되돌리는 데 함께해주세요!
      </Text>
 
      <Box {...paragraphProps}>
        <Image src={Image03} layout="fill" alt="Greenpeace" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        아마존 열대우림을 왜 지켜야 하나요?
      </Heading>

      <Text as="li" {...lineProps}>
      아마존 원주민에게 안전한 보금자리가 필요합니다.
      </Text>

      <Text as="li" {...lineProps}>
      지구 생물종의 10%가 살고 있는 아마존의 생물다양성은 지켜져야 합니다.
      </Text>

      <Text as="li" {...lineProps}>
      아마존은 생명의 보고이자 기후 위기를 막는 지구의 수호자입니다.
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);

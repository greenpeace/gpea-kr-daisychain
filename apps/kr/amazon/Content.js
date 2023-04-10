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
        HYUNDAI는 알고 있을까요?
      </Heading>

      <Text as="p" {...paragraphProps}>
        현대의 굴착기가 아마존 파괴 현장에서 확인되었습니다.
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="Greenpeace" />
      </Box>
 
      <Text as="p" {...paragraphProps}>
      아마존의 불법 금 채굴 현장에서 흘러나오는 수은이 숲과 강을 오염시키고 있지만, 여러 업자들은 수많은 야생동물과 원주민의 죽음을 외면하고 이익을 좇아 채굴량을 늘리고 있습니다. 그 현장에서 가장 많이 발견된 것은 바로 HYUNDAI의 중장비 기계였습니다.
      </Text>
 
      <Box {...paragraphProps}>
        <Image src={Image02} layout="fill" alt="Greenpeace" />
      </Box>

      <Text as="p" {...paragraphProps}>
      생명을 잃어가는 아마존 열대우림을 가득 메운 HYUNDAI의 로고, 이제 멈춰야 합니다. 울창한 숲과 건강하던 원주민의 삶을 되돌리는 데 함께해주세요!
      </Text>

      <Text as="p" {...paragraphProps}>
      여러분의 청원은 HYUNDAI가 자사의 중장비가 불법 금 채굴에 동원되고 있다는 것을 다시 한 번 확인시키고, 불법 금 채굴 해결에 협조할 것을 요구하는 데 큰 힘이 됩니다.
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

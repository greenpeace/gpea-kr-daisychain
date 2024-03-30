import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
  captionProps,
  lineProps
} from '@common/styles/components/contentStyle';

import Image01 from './images/forest2.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        소방청 예산의 9배가 넘는 예산이 광범위한 벌채에 이용되는 사실, 알고 계셨나요?
      </Heading>

      <Text as="p" {...paragraphProps}>
        매년 수천억 원이 넘는 우리 세금이 매일 축구장 55개 면적의 숲을 베는 데 사용되고 있습니다.
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="Greenpeace" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        산림파괴를 막고 생물다양성을 지켜주세요.
      </Heading>

      <Text as="p" {...paragraphProps}>
        파괴되는 숲 중에는 ‘보호지역’도 다수 포함되어 있습니다. 셀 수 없이 다양한 동식물을 보존하기 위한 보호지역의 숲이 사라지면 멸종위기 동물들의 집이 파괴됩니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        우리나라의 숲을 지키기 위해 필요한 것은 딱 하나, 여러분의 관심입니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        한국 정부가 산림파괴가 아닌 산림 보호에 힘쓰도록 청원에 함께해주세요.
      </Text>

    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);

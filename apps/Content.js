import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
  ulLineProps,
  linePropsLast
} from '@common/styles/components/contentStyle';

import Image01 from './images/v3-content.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <div>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
      일회용 플라스틱이 무분별하게 생산, 사용되는 이유는 ‘규제’가 없기 때문입니다.
      </Heading>

      <Text as="p" {...paragraphProps}>
        재활용, 우리는 열심히 하고 있는데 왜 지구는 플라스틱 쓰레기에 몸살을 앓고 있을까요?
      </Text>

      <Text as="p" {...paragraphProps}>
        한 사람, 한 국가만의 노력으로 플라스틱 오염을 되돌리기엔 이미 문제가 너무나도 심각합니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        국제적인 법과 규칙으로 모든 국가가 플라스틱 사용과 생산을 줄여야 이 심각한 오염에서 우리 자신과 지구를 구할 수 있습니다.
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="플라스틱의 심각성을 보여주는 고래 모양의 조형물" />
      </Box>

      <Text as="p" {...paragraphProps}>
        문제의 심각성을 인지한 각국 정부는 한자리에 모여 플라스틱 오염을 멈추기 위한 ‘국제 플라스틱 협약‘ 을 논의하고 있습니다.
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        여러분의 청원으로,
      </Heading>
      <ul>
        <Text as="li" {...ulLineProps}>
          플라스틱의 생산 단계에서의 석유 사용 절감
        </Text>
        <Text as="li" {...ulLineProps}>
          플라스틱을 필요 이상으로 만들어내는 생산자에게 적절한 책임 부과
        </Text>
        <Text as="li" {...linePropsLast}>
          리필 및 재사용 시스템 구축
        </Text>
      </ul>

      <Text as="p" {...paragraphProps}>
        위 사항을 각국 정부가 심도 있게 논의할 수 있습니다.
        우리의 목소리와 의지를 보여주어야 국제 플라스틱 협약의 여정을 성공으로 이끌 수 있습니다. 아이들과 우리 스스로를 위해 깨끗하고 안전한 지구를 만들어주세요!
      </Text>

    </div>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);

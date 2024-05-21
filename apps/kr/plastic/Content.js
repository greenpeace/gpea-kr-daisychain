import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
  captionProps,
  lineProps
} from '@common/styles/components/contentStyle';

import Image01 from './images/yonggitest-content1-0521.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
      음료 페트병의 평균 사용 기간은 단 4일이지만 분해되는 데는 450년이나 걸립니다.
      </Heading>

      <Text as="p" {...paragraphProps}>
      그린피스의 조사에 따르면, 가정에서 사용하고 버려지는 일회용 플라스틱 3개 중 1개가 일회용 페트병입니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      음료 기업이 플라스틱 생산을 멈추지 않는다면, 일회용 쓰레기의 양은 계속 증가합니다. 국내 음료 기업들은 일회용 플라스틱 대신 재사용 포장재를 사용하는 방식으로 사업을 변화 시켜야 합니다. 
      </Text>
      
      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="Greenpeace" />
      </Box>

      <Text as="p" {...paragraphProps}>
      여러분의 청원으로, 음료 기업에게 책임감있는 행동을 요구할 수 있습니다.
      </Text>

      <Text as="li" {...lineProps}>
      2025년 안에 일회용 플라스틱 대신 재사용 포장재를 이용해주세요.
      </Text>

      <Text as="li" {...lineProps}>
      일회용 플라스틱 대신 이용할 수 있는 리필, 재사용 시스템을 적극적으로 도입해주세요.
      </Text>

      <Text as="li" {...lineProps}>
      플라스틱 생산 감축과 재사용과 리필 기반의 목표를 포함한 강력한 국제 플라스틱 협약에 동의해주세요.
      </Text>

      <Text as="p" {...paragraphProps}>
      그린피스의 요구대로  음료기업이 변화한다면, 소비자들은 일회용 플라스틱 쓰레기를 버리는 번거로움과 죄책감에서 벗어날 수 있습니다. 
      </Text>

      <Text as="p" {...paragraphProps}>
      음료 기업들이 적극적인 리필/재사용 시스템을 구축하여 근본적인 플라스틱 오염 위기를 해결하고, 소비자들의 요구에 부응할 수 있도록 지금, 당신의 참여가 절실히 필요합니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      그린피스는 2025년까지 50만개의 서명을 모아 음료기업에 시민들의 목소리를 전달할 것입니다. 당신의 참여가 직접적으로 기업의 변화를 만들어 낼 수 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      그린피스에 당신의 목소리를 더해주시면 플라스틱 오염 위기를 해결할 수 있습니다!
      </Text>

      <Text as="p">
      {"<그린피스와 시민들이 만든 놀라운 변화>"}
      </Text>

      <Text as="li" {...lineProps}>
      2016년, 미세플라스틱 규제 서명 운동으로 식약처 화장품 원료로 사용 중단 결정!
      </Text>

     <Text as="li" {...lineProps}>
      2020년, 용기내 캠페인으로 롯데마트가 아시아 대형마트 최초 플라스틱 감축 선언!
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);

import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
  captionProps,
  lineProps
} from '@common/styles/components/contentStyle';

import Image01 from './images/forest-bf.png';
import Image02 from './images/forest-content02.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
      &apos;보호지역&apos;으로 지정된 우리의 산림이 보호되지 않는다는 사실, 알고 계셨나요?
      </Heading>

      <Text as="p" {...paragraphProps}>
      지난 6월, 그린피스는 보호지역으로 지정된 산림이 무분별한 개발로 파괴되고 있다는 사실을 발견했습니다. 그린피스가 목격한 파괴 현장은 바로 우리나라 생태계의 중심지인 백두대간에 속해 있는 민주지산입니다. <br/>치악산 파괴, 설악산 케이블카 시공, 백두대간 탄광 개발 등도 모두 보호지역에서 일어나고 있는 파괴 행위입니다. 
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="강원도 원주시 치악산의 2019년 6월(좌)과 2023년 6월(우) 인공위성 사진" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
       보호지역은 필히 보호받아야만 합니다.
      </Heading>

      <Text as="p" {...paragraphProps}>
       우리나라 보호지역은 반달가슴곰, 산양을 비롯한 멸종위기종의 서식지이며 고유한 생태계를 품고 있습니다. 숲이 사라지면 이곳에서 살고 있는 다양한 동식물도 집을 잃고 생명의 위험을 처하게 됩니다. 또한 보호지역은 탄소를 흡수해 기후변화를 막아주는 중요한 역할을 합니다. 기후위기를 대응해야 하는 현 상황에 보호지역을 파괴한다는 것은 악순환의 고리를 심화 시킬 뿐입니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      세계 곳곳에서는 산림 보호지역을 지키고 생물다양성을 보존하기 위해 다양한 움직임이 일어나고 있습니다. <strong>그린피스는 2030년까지 육상과 해양 보호지역이 최소 30%까지 확대되고 보호지역이 보호될 될 수 있도록 정부에 촉구하고 있습니다.</strong>
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image02} layout="fill" alt="독일 하이니히 국립공원 유럽 세계유산" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
       우리는 ‘이름만’ 보호지역이 아닌 ‘진짜’ 보호지역을 원합니다. 
      </Heading>

      <Text as="p" {...paragraphProps}>
      숲은 깨끗한 공기와 시원한 그늘을 제공하고 다양한 동식물의 터전입니다. 탄소를 흡수해 기후위기를 막아내는 역할도 합니다. 자연이 우리에게 준 선물, 이제 우리가 돌려줄 때입니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      인간의 욕심으로 일어난 무분별한 파괴를 멈추고, 자연을 존중하는 방향으로 향할 것을 대한민국 정부에 요구합니다. 지금 청원에 동참해 주세요. 그린피스는 다가오는 2024년 10월 국정감사에 한국 정부가 보호지역을 제대로 보호할 수 있도록 여러분의 목소리를 전달하겠습니다.
      </Text>

    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);

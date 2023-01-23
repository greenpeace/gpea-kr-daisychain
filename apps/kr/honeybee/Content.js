import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
  captionProps
} from '@common/styles/components/contentStyle';

import Image01 from './images/GP0STU61Y_PressMedia.jpg';
import Image02 from './images/GP01B4T_PressMedia.jpg';
import Image03 from './images/GP1STQ8D_PressMedia.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="Greenpeace" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        지금 꿀벌이 위험합니다!
      </Heading>

      <Text as="p" {...paragraphProps}>
        2010년, 국내 토종벌의 90%가 전염병으로 사라진 데 이어 2022년 초에는 국내 꿀벌 78억 마리가 사라졌습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      전문가들은 2023년 초에 훨씬 더 많은 꿀벌들이 사라질 수 있다고 경고합니다. 꿀벌은 우리가 먹는 고추, 아몬드를 비롯하여 가축의 먹이까지, 우리 식량 71%의 수분을 담당하기에 농가에도 비상이 걸렸습니다.
기후변화, 응애, 살충제 등 꿀벌이 사라지는 이유는 많습니다. 그 중에서도 가장 시급한 문제는 꿀벌의 먹이입니다. 꿀벌의 먹이가 부족해 면역력이 약해지고 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      꿀벌을 살릴 기회가 아직 남아있습니다. 벌에게 필요한 서식지와 먹이가 충분히 확보된다면 다시 살아날 수 있습니다.
이미 미국과 유럽 등 세계 주요 국가들은 꿀벌을 살리기 위해 대통령, 국제연합 직속의 꿀벌 살리기 위원회를 운영하고 있습니다. 
      </Text>

      <Text as="p" {...paragraphProps}>
      한국도 늦기 전에 꿀벌을 살려야 합니다.
      </Text>

       <Box {...paragraphProps}>
        <Image src={Image02} layout="fill" alt="Greenpeace" />
      </Box>

      <Heading
        {...headingProps}
        color={`theme.${themeInterests}`}
        marginTop="30"
      >
        {"<한덕수 국무총리께>"}
      </Heading>

      <Text as="p" {...paragraphProps}>
      국무총리님이 강력한 권한으로 농림축산식품부, 환경부, 국토교통부가 함께 꿀벌 보호에 나설 ‘꿀벌 살리기 위원회’를 설립하시기를 바랍니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      ‘꿀벌 살리기 위원회’는 다음과 같은 활동을 펼쳐야 합니다.
      </Text>

     

      <Text as="li" {...paragraphProps}>
      지속가능한 양봉업을 위한 국내 밀원수 확충 및 관리
      </Text>

      <Text as="li" {...paragraphProps}>
      지속가능한 농업과 생태계 보호를 위한 벌 등 수분 매개체 서식지 확보
      </Text>

      <Text as="li" {...paragraphProps}>
      멸종 위기에 빠진 토종벌과 야생벌 개체수 확충
      </Text>

      <Text as="p" {...paragraphProps}>
      국무총리님,<br />
꿀벌을 지켜 식량안보가 확보된 대한민국을 만들어 주시기 바랍니다. 감사합니다.
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image03} layout="fill" alt="Greenpeace" />
      </Box>

      <Text as="p" {...paragraphProps}>
      여러분의 청원은 국무총리 산하 ‘꿀벌 살리기 위원회’의 구축을 요구하는데 활용됩니다. 많은 관심과 참여 부탁드립니다.
      </Text>

    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);

import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
  captionProps,
  lineProps
} from '@common/styles/components/contentStyle';

import Image01 from './images/GP0STU61Y_PressMedia.jpg';
import Image02 from './images/GP01B4T_PressMedia.jpg';
import Image03 from './images/GP1STQ8D_PressMedia.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
      대형마트에서 산 과일, 채소, 반찬. 집에 돌아와 포장을 벗기면 쓰레기통이 금세 차오릅니다.
      </Heading>

      <Text as="p" {...paragraphProps}>
      일회용 플라스틱의 평균 사용 기간은 6개월. 하지만 썩는 데는 무려 500년이 걸립니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      문제는 우리에게 플라스틱 쓰레기 없이 장 볼 수 있는 선택권이 없다는 것입니다.
      </Text>
      
      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="Greenpeace" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
      우리가 함께 요구하면 바뀔 수 있습니다.
      </Heading>

      <Text as="p" {...paragraphProps}>
      지구를 위한 변화는 여러분의 목소리와 함께 시작됩니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      제조사와 소비자를 잇는 마트가 변한다면 선반에 올려지는 제품이 변하고, 소비자의 플라스틱 없는 삶에 기여할 수 있을 것입니다.
      </Text>
{/* 
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

      <Text as="li" {...lineProps}>
      지속가능한 양봉업을 위한 국내 밀원수 확충 및 관리
      </Text>

      <Text as="li" {...lineProps}>
      지속가능한 농업과 생태계 보호를 위한 벌 등 수분 매개체 서식지 확보
      </Text>

      <Text as="li" {...lineProps}>
      멸종 위기에 빠진 토종벌과 야생벌 개체수 확충
      </Text>

      <br />
      <Text as="p" {...paragraphProps}>
      국무총리님,<br />
꿀벌을 지켜 식량안보가 확보된 대한민국을 만들어 주시기 바랍니다. 감사합니다.
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image03} layout="fill" alt="Greenpeace" />
      </Box>

      <Text as="p" {...paragraphProps}>
      여러분의 청원은 국무총리 산하 ‘꿀벌 살리기 위원회’의 구축을 요구하는데 활용됩니다. 많은 관심과 참여 부탁드립니다.
      </Text> */}

    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);

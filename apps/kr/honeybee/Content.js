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
import Image04 from './images/honeybee-event.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        벌의 위기는 인류의 위기입니다.
      </Heading>

      <Text as="p" {...paragraphProps}>
        작년 초 꿀벌 78억 마리가 사라지고 올해 초 141억 마리가 사라졌습니다. 수많은 전문가들이 내년 월동 폐사 규모가 더욱 커질 것으로 전망하고 있습니다. 개체수가 파악되지 않고 있는 야생벌까지 생각하면 상황은 더욱 심각합니다.
      </Text>
      
      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="Greenpeace" />
      </Box>

      <Text as="p" {...paragraphProps}>
        전 세계 100대 농작물 중 71%, 개화식물 중 87%가 꿀벌을 비롯한 수분매개체의 활동으로 수분하고 있습니다. 따라서 벌의 실종은 생태계와 식량안보의 붕괴로 이어질 수 있습니다.
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        벌은 꽃으로 구할 수 있습니다.
      </Heading>

      <Text as="p" {...paragraphProps}>
        벌은 아까시나무, 유채꽃 등 꿀의 원천이 되는 식물인 밀원식물을 통해 영양분을 확보하고 면역력을 키웁니다. 이 밀원면적이 지난 50여 년간 약 70%가 사라져 약 15만ha밖에 남지 않았습니다. 이는 벌의 영양 스트레스로 인한 면역력 저하로 이어져 기생충과 살충제 등 외부요인에 더욱 취약해지고 있습니다. 
      </Text>

      <Text as="p" {...paragraphProps}>
        벌을 구하기 위해서는 밀원면적을 최소한 지금의 2배인 30만ha 이상 늘려야 합니다. 현재 산림청이 밀원면적을 늘리는 속도로는 40년 이상이 걸립니다. <b style={{ textDecoration: 'underline' }}>그 사이에 벌이 다 사라질 수도 있는 것이죠.</b> 
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image02} layout="fill" alt="Greenpeace" />
      </Box>

      <Heading
        {...headingProps}
        color={`theme.${themeInterests}`}
        marginTop="30"
      >
        벌이 안전한 환경, 정부 부처의 협업이 필수적입니다. 
      </Heading>

      <Text as="p" {...paragraphProps}>
        벌이 안전한 환경을 조성하기 위해서는 밀원면적을 늘리고 살충제 등 외부 위협으로부터 안전한 서식지를 마련해야 합니다. 이를 위해서는 현재 꿀벌을 관리하는 농식품부만의 노력으로는 한계가 있습니다. 
      </Text>

      
      <Text as="p" {...paragraphProps}>
        기존 숲을 보호하면서 벌을 위한 밀원면적을 확보하기 위해서는 농식품부 뿐 아닌 타 부처의 협조도 필수적입니다. 또한, 산림을 벌목하고 특정 나무만 집중적으로 심는 현재의 산림정책도 야생벌의 서식처를 파괴하고 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        <b>생태보호구역을 확보하고 도시 내 밀원면적을 늘리기 위해서는 환경부, 국토교통부, 산림청 등 다수의 부처가 함께 협업해야 합니다.</b> 같은 이유로 미국과 영국 등은 법무부, 교통부 등 다양한 부처가 함께 노력하고 있습니다. 
      </Text>

      <Text as="p" {...paragraphProps}>
        <b>정부 부처를 움직이기 위해, 대중 여러분의 관심과 지지가 필요합니다.
          청원에 함께 해주세요!</b>
      </Text>

    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);

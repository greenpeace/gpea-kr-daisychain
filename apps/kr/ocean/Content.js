import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
  captionProps,
  lineProps
} from '@common/styles/components/contentStyle';

//import Image01 from './images/amazon-content01.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        푸르른 바다를 지켜주세요
      </Heading>

      <Text as="p" {...paragraphProps}>
      불법어업과 기후변화, 심해채굴까지. 우리 바다는 위기에 처했습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      현재  인간 활동을 일체 금지하는 공해(公海)상 해양보호구역은 고작 2% 미만! 공해를 보호하는 국제적 법과 규제가 없어 바다가 무분별하게 파괴되고, 해양생물들이 고통받고 있습니다.
      </Text>

      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/xk1oBddvHl0"
        title="해양보호구역 확대를 지지해주세요!"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <Heading {...headingProps} color={`theme.${themeInterests}`} marginTop="30">
        바다를 보호할 수 있는 길
      </Heading>

      <Text as="p" {...paragraphProps}>
      2023년 3월에 체결된 UN 글로벌 해양조약으로 해양보호의 법적 토대가 마련되며, 새로운 도약이 시작되었습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
      각국 정부는 2030년까지 공해 30%가 보호구역으로 지정될 수 있도록 법적 규제를 수립하고 이행해야 하며, 그린피스는 공해 해양보호구역 확대를 위해 캠페인을 이어 나갈 예정입니다.
      </Text>

    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);

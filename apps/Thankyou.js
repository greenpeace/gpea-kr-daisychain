import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
  captionProps,
  lineProps,
  linePropsLast
} from '@common/styles/components/contentStyle';
import { useSelector } from 'react-redux';

import Image02 from './images/yonggitest-content2-0521.jpg';

const Thankyou = () => {
  const theme = useSelector((state) => state?.theme?.data);
  const signup = useSelector((state) => state?.signup?.data);
  const themeInterests = theme.interests;

  return (
    <>
      <Heading {...headingProps}>후원 동참으로 캠페인에 힘을 보태주세요.</Heading>

      <Text as="p" {...paragraphProps}>
      여러분의 청원으로 환경부 등 다양한 정부 부처, 기업들이 무분별한 플라스틱 생산과 사용에 있어 책임있는 변화를 이끌어 나갈 것입니다. 이를 위해 국내외 전문가들과 함께 과학적인 근거로 정부를 설득하겠습니다. 
      </Text>

      <Heading {...headingProps}> 
        {`플라스틱 오염 없는 세상을 위해 ${signup?.LastName}님의 후원이 꼭 필요합니다.`}
      </Heading>

      <Text as="p" {...paragraphProps}>
      그린피스는 전 세계 50개국에서 각 지역 시민들의 후원으로 플라스틱 사용을 줄이기 위한 활동을 지속하고 있습니다. 
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image02} layout="fill" alt="강력한 국제 플라스틱 협약을 요구하고 있는 그린피스 캠페이너" />
      </Box>

      <Text as="p" {...paragraphProps}>
      지금 후원을 시작해 플라스틱으로부터 지구를 지키기 위한 활동에 함께해 주세요!
      </Text>

      <Heading {...headingProps}>
      지금 후원을 시작해 주시면
      </Heading>

      <Text as="li" {...lineProps}>
      플라스틱 쓰레기 배출에 가장 많은 책임이 있는 기업을 시민들의 활동으로 알아보는 조사와 보고서 작성에 후원금이 사용됩니다.
      </Text>

      <Text as="li" {...lineProps}>
       해양 플라스틱 오염 실태 조사를 위해 수중 드론과 같은 과학 장비를 대여하고 조사하는데 후원금이 사용됩니다.
      </Text>

      <Text as="li" {...lineProps}>
      법적 절차에 따라 화석연료, 플라스틱 제조사에 플라스틱 생산량, 사용량 공개를 요구하고, 기후변화에 대한 책임을 물어 불필요한 일회용 플라스틱 생산을 막을 수 있습니다.
      </Text>

      <Text as="li" {...linePropsLast}>
      올해 11월에 부산에서 개최될 국제 플라스틱 협약의 마지막 회의에 강력한 협약을 요구하는 시민의 목소리를 전달 할 수 있도록 국내외 언론대응 활동 및 대규모 시민 참여 행사를 부산과 인천에서 진행하는데 후원금이 사용됩니다
      </Text>

      <Heading {...headingProps}>
      그린피스가 플라스틱을 줄이기 위해 걸어온 길
      </Heading>

      <Text as="li" {...lineProps}>
      2016년, 마이크로비즈(미세플라스틱) 규제 서명 운동, 식약처 화장품 원료로 사용 중단 결정
      </Text>
      <Text as="li" {...lineProps}>
      2020년, 용기내 캠페인 시작 및 롯데마트, 아시아 대형마트 최초 플라스틱 감축 선언!
      </Text>
      <Text as="li" {...lineProps}>
      2020년, 가정 내 플라스틱 폐기물 배출 실태조사(플콕조사) 시작
      </Text>
      <Text as="li" {...lineProps}>
      2022년, 국제 플라스틱 협약 캠페인 시작
      </Text>
    </>
  );
};

export default Thankyou;

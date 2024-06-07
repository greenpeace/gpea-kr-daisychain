import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
  lineProps
} from '@common/styles/components/contentStyle';
import { useSelector } from 'react-redux';

import Image01 from './images/v3-thankyou.jpg';

const Thankyou = () => {
  const theme = useSelector((state) => state?.theme?.data);
  const signup = useSelector((state) => state?.signup?.data);
  const themeInterests = theme.interests;

  return (
    <>
      <Heading {...headingProps}>지속적인 관심이 필요합니다.</Heading>

      <Text as="p" {...paragraphProps}>
        여러분의 청원으로 환경부 등 다양한 정부 부처, 기업들이 무분별한 플라스틱 사용규제에 적극 나서도록 바꿔나갈 것입니다. 이를 위해 국내외 전문가들과 함께 과학적인 근거로 정부를 설득하겠습니다. 
      </Text>

      <Heading {...headingProps}>플라스틱 오염 없는 세상을 위해 {signup.LastName}님의 후원이 꼭 필요합니다.</Heading>

      <Text as="p" {...paragraphProps}>
        그린피스는 전 세계 50개국에서 각 지역 시민들의 후원으로 플라스틱 사용을 줄이기 위한 활동을 지속하고 있습니다. 
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="Greenpeace" />
      </Box>

      <Text as="p" {...paragraphProps}>
        지금 후원을 시작해 플라스틱으로부터 지구를 지키기 위한 활동에 함께해 주세요!
      </Text>

      <Heading {...headingProps}>
        지금 후원을 시작해 주시면
      </Heading>

      <ol>
        <Text as="li" {...lineProps}>
          플라스틱을 무분별하게 생산하는 기업에 맞서 싸울 수 있는 안정적인 자금 기반을 확보할 수 있습니다.
        </Text>
        <Text as="li" {...lineProps}>
          플라스틱을 줄이고 지구를 보호하기 위한 대규모 시민운동을 구축할 수 있습니다.
        </Text>
        <Text as="li" {...lineProps}>
          법적 절차에 따라 화석연료, 플라스틱 제조사에 적절한 책임을 묻고 불필요한 플라스틱 생산을 막을 수 있습니다.
        </Text>
        <Text as="li" {...lineProps}>
          강력한 국제 플라스틱 협약 체결을 각국 정부에 요구할 수 있습니다.
        </Text>
      </ol>

      <Heading {...headingProps}>
       그린피스가 플라스틱을 줄이기 위해 걸어온 길
      </Heading>

      <ol>
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
      </ol>
    </>
  );
};

export default Thankyou;

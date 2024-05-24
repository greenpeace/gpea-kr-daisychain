import Head from 'next/head';
import Script from 'next/script';

const SEO = () => {
  return (
    <Head>
      {/* campaign dataLayer */}
      {/* <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var dataLayer = (window.dataLayer = window.dataLayer || []);
          dataLayer.push({
            event: 'petition_load'
          });
        `,
        }}
      /> */}
      {/* title */}
      <title>
      일회용 플라스틱 쓰레기가 더이상 만들어지지 않도록 요구해주세요! | 그린피스
      </title>
      <meta
        property="og:title"
        content="그린피스 | 일회용 플라스틱 쓰레기가 더이상 만들어지지 않도록 요구해주세요!"
      />
      <meta
        name="description"
        content="음료 기업들은 끊임없이 일회용 플라스틱 쓰레기를 생산하고 있습니다. 기업들이  쓰레기를 생산하는 것을 멈추도록 함께 해주세요."
      />
      <meta
        property="og:description"
        content="음료 기업들은 끊임없이 일회용 플라스틱 쓰레기를 생산하고 있습니다. 기업들이  쓰레기를 생산하는 것을 멈추도록 함께 해주세요."
      />
      <meta name="keywords" content="플라스틱제로, 제로웨이스트, 미니멀라이프, 친환경제품, 환경보호, 국제플라스틱협약, 국제플라스틱조약, 코카콜라, 롯데칠성음료, 일회용 플라스틱 쓰레기, 플라스틱 문제, 플라스틱 오염, 플라스틱 오염 해결방안, 플라스틱 오염 해결책" />
      <meta
        property="og:image"
        content="https://gpseoulwebserver.co.kr/petitions/yonggitest/yonggitest-content01.jpg"
      />
    </Head>
  );
};

export default SEO;

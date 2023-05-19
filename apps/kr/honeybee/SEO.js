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
        한덕수 총리님, 꿀벌을 구해주세요! 지금, 꿀벌이 위험합니다. | 그린피스
      </title>
      <meta
        property="og:title"
        content="그린피스 | 한덕수 총리님, 꿀벌을 구해주세요! 지금, 꿀벌이 위험합니다."
      />
      <meta
        name="description"
        content="한덕수 총리님, 꿀벌을 구해주세요! 지금, 꿀벌이 위험합니다."
      />
      <meta
        property="og:description"
        content="한덕수 총리님, 꿀벌을 구해주세요! 지금, 꿀벌이 위험합니다."
      />
      <meta
        property="og:image"
        content="https://gpseoulwebserver.co.kr/petitions/honeybee/honeybee-main.jpg"
      />
    </Head>
  );
};

export default SEO;

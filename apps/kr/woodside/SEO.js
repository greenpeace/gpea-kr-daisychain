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
        그린피스 | 고래들의 안식처를 지켜주세요!
      </title>
      <meta
        property="og:title"
        content="그린피스 | 고래들의 안식처를 지켜주세요!"
      />
      <meta
        name="description"
        content="고래와 바다를 지키기 위해, 그린피스는 여러분의 목소리가 필요합니다."
      />
      <meta
        property="og:description"
        content="고래와 바다를 지키기 위해, 그린피스는 여러분의 목소리가 필요합니다."
      />
      <meta
        property="og:image"
        content="https://gpseoulwebserver.co.kr/asset/images/woodside/woodside-content01-20230816.jpg"
      />
    </Head>
  );
};

export default SEO;

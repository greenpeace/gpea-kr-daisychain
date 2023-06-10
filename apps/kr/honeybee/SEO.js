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
        그린피스 | 사라지는 꿀벌과 야생벌, 더 늦기 전에 구해주세요.
      </title>
      <meta
        property="og:title"
        content="그린피스 | 사라지는 꿀벌과 야생벌, 더 늦기 전에 구해주세요."
      />
      <meta
        name="description"
        content="여러분의 청원으로 벌이 건강한 환경을 만들어주세요!"
      />
      <meta
        property="og:description"
        content="여러분의 청원으로 벌이 건강한 환경을 만들어주세요!"
      />
      <meta
        property="og:image"
        content="https://gpseoulwebserver.co.kr/petitions/honeybee/honeybee-main.jpg"
      />
    </Head>
  );
};

export default SEO;

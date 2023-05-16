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
        아마존 수은 중독으로 고통받는 원주민의 목소리에 힘을 보태주세요! | 그린피스
      </title>
      <meta
        property="og:title"
        content="그린피스 | 아마존 수은 중독으로 고통받는 원주민의 목소리에 힘을 보태주세요!"
      />
      <meta
        name="description"
        content="아마존 수은 중독으로 고통받는 원주민의 목소리에 힘을 보태주세요!"
      />
      <meta
        property="og:description"
        content="아마존 수은 중독으로 고통받는 원주민의 목소리에 힘을 보태주세요!"
      />
      <meta
        property="og:image"
        content="https://gpseoulwebserver.co.kr/asset/images/amazon/amazon-main.jpg"
      />
    </Head>
  );
};

export default SEO;

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
        기후위기로 인한 재난, 지금 행동해야 합니다! | 그린피스
      </title>
      <meta
        property="og:title"
        content="그린피스 | 기후위기로 인한 재난, 지금 행동해야 합니다!"
      />
      <meta
        name="description"
        content="대한민국 정부와 국회에 함께 요구해주세요."
      />
      <meta
        property="og:description"
        content="대한민국 정부와 국회에 함께 요구해주세요."
      />
      <meta
        property="og:image"
        content="https://gpseoulwebserver.co.kr/asset/images/ce/ce-20230917-main-min.jpg"
      />
      <Script src="https://www.googleoptimize.com/optimize.js?id=GTM-K8RRN9R" async=""></Script>
    </Head>
  );
};

export default SEO;

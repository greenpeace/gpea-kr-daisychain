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
        원전 말고 안전! | 그린피스
      </title>
      <meta
        property="og:title"
        content="그린피스 | 원전 말고 안전!"
      />
      <meta
        name="description"
        content="한국 정부가 원전말고 안전을 선택할 수 있도록 함께 동참해주세요!"
      />
      <meta
        property="og:description"
        content="한국 정부가 원전말고 안전을 선택할 수 있도록 함께 동참해주세요!"
      />
      <meta
        property="og:image"
        content="https://gpseoulwebserver.co.kr/asset/images/endingnuke/endingnuke-main.jpg"
      />
      <Script src="https://www.googleoptimize.com/optimize.js?id=GTM-K8RRN9R" async=""></Script>
    </Head>
  );
};

export default SEO;

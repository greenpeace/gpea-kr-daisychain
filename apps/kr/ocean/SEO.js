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
        해양보호구역 확대를 지지해주세요! | 그린피스
      </title>
      <meta
        property="og:title"
        content="그린피스 | 해양보호구역 확대를 지지해주세요!"
      />
      <meta
        name="description"
        content="2030년까지 30%의 해양보호구역이 지정될 수 있도록 그린피스 캠페인에 동참해주세요!"
      />
      <meta
        property="og:description"
        content="2030년까지 30%의 해양보호구역이 지정될 수 있도록 그린피스 캠페인에 동참해주세요!"
      />
      <meta
        property="og:image"
        content="https://gpseoulwebserver.co.kr/asset/images/seo/ocean-20230730.jpg"
      />
    </Head>
  );
};

export default SEO;

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
        아마존 열대우림을 파괴하는 중장비, HYUNDAI는 판매를 중단해주세요! | 그린피스
      </title>
      <meta
        property="og:title"
        content="그린피스 | 아마존 열대우림을 파괴하는 중장비, HYUNDAI는 판매를 중단해주세요!"
      />
      <meta
        name="description"
        content="아마존 열대우림을 파괴하는 중장비, HYUNDAI는 판매를 중단해주세요!"
      />
      <meta
        property="og:description"
        content="아마존 열대우림을 파괴하는 중장비, HYUNDAI는 판매를 중단해주세요!"
      />
      <meta
        property="og:image"
        content="https://gpseoulwebserver.co.kr/asset/images/amazon/amazon-main.jpg"
      />
    </Head>
  );
};

export default SEO;

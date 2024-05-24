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
        그린피스 | 우리 세금이 산림 파괴에 사용되지 않도록 정책 변화를 함께 요구해주세요!
      </title>
      <meta property="og:title" content="우리 세금이 산림 파괴에 사용되지 않도록 정책 변화를 함께 요구해주세요! | 그린피스" />
      <meta property="og:description" content="우리 세금이 산림 파괴에 사용되지 않도록 정책 변화를 함께 요구해주세요" />
      <meta name="keywords" content="그린피스, 산림보호, 나무보호, 환경보호, 멸종위기" />
      <meta
        property="og:image"
        content="https://gpseoulwebserver.co.kr/donation/forest/api/forest-main.jpeg"
      />
    </Head>
  );
};

export default SEO;

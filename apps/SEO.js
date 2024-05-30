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
        그린피스 | 보호받지 못한 보호지역을 지켜주세요! 
      </title>
      <meta property="og:title" content="그린피스 | 보호받지 못한 보호지역을 지켜주세요!" />
      <meta property="og:description" content="보호지역 파괴를 멈추기 위해 여러분의 참여가 절실히 필요합니다." />
      <meta name="keywords" content="산림보호, 산림파괴, 보호지역, 보호구역, 생물다양성, 야생동물, 국립공원, 멸종위기동물, 산림보호지역" />
      <meta
        property="og:image"
        content="https://gpseoulwebserver.co.kr/donation/forest/api/forest-main.jpeg"
      />
    </Head>
  );
};

export default SEO;

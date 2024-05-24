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
        국제 플라스틱 협약 체결을 지지해주세요 | 그린피스
      </title>
      <meta
        property="og:title"
        content="그린피스 | 국제 플라스틱 협약 체결을 지지해주세요"
      />
      <meta
        name="description"
        content="국제 플라스틱 협약은 플라스틱 없는 미래를 향한 큰 힘이 될 것입니다. 이 협약을 위해 여러분의 힘이 필요합니다."
      />
      <meta
        property="og:description"
        content="국제 플라스틱 협약은 플라스틱 없는 미래를 향한 큰 힘이 될 것입니다. 이 협약을 위해 여러분의 힘이 필요합니다."
      />
      <meta
        name="keywords"
        content="플라스틱제로, 제로웨이스트, 미니멀라이프, 친환경제품, 환경보호, 국제플라스틱협약, 국제플라스틱조약"
      />
      <meta
        property="og:image"
        content="https://gpseoulwebserver.co.kr/asset/images/2024/plastic-v3/plasticv3-main.jpg"
      />
      <Script src="https://www.googleoptimize.com/optimize.js?id=GTM-K8RRN9R" async=""></Script>
    </Head>
  );
};

export default SEO;

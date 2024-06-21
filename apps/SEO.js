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
      그린피스 후원하기 | 그린피스
      </title>
      <meta
        property="og:title"
        content="그린피스 후원하기 | 그린피스"
      />
      <meta
        name="description"
        content="환경문제로 심각한 위기에 처한 지구를 지켜주세요. 당신의 후원 참여가 변화를 만들 수 있습니다."
      />
      <meta
        property="og:description"
        content="환경문제로 심각한 위기에 처한 지구를 지켜주세요. 당신의 후원 참여가 변화를 만들 수 있습니다."
      />
      <meta
        property="og:image"
        content="https://gpseoulwebserver.co.kr/donation/DD/c64528da-gp0stpr4h_medium_res_black_text.jpg"
      />
    </Head>
  );
};

export default SEO;

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
      플라스틱 없는 장보기를 위해 대형마트에 요구해주세요! | 그린피스
      </title>
      <meta
        property="og:title"
        content="그린피스 | 플라스틱 없는 장보기를 위해 대형마트에 요구해주세요!"
      />
      <meta
        name="description"
        content="대형마트에 불필요한 일회용 플라스틱 포장을 줄일 것을 요구해주세요"
      />
      <meta
        property="og:description"
        content="대형마트에 불필요한 일회용 플라스틱 포장을 줄일 것을 요구해주세요"
      />
      <meta
        property="og:image"
        content="https://gpseoulwebserver.co.kr/petitions/yonggitest/yonggitest-content01.jpg"
      />
    </Head>
  );
};

export default SEO;

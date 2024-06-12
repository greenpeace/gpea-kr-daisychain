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
      기후위기를 가속화하는 LNG 발전소 신규 건설 멈춰야 합니다! | 그린피스
      </title>
      <meta
        property="og:title"
        content="그린피스 | 기후위기를 가속화하는 LNG 발전소 신규 건설 멈춰야 합니다!"
      />
      <meta
        name="description"
        content="한국 정부에 LNG 발전소 건설을 멈추도록 요구해 주세요."
      />
      <meta
        property="og:description"
        content="한국 정부에 LNG 발전소 건설을 멈추도록 요구해 주세요."
      />
      <meta name="keywords" content="" />
      <meta
        property="og:image"
        content="https://gpseoulwebserver.co.kr/asset/images/2024/reboot/reboot-main.jpg"
      />
    </Head>
  );
};

export default SEO;

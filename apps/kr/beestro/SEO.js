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
        꿀벌 식당, 벌에게 맛있는 한 끼 선물하세요 | 그린피스
      </title>
      <meta
        property="og:title"
        content="꿀벌 식당, 벌에게 맛있는 한 끼 선물하세요 | 그린피스"
      />
      <meta
        name="description"
        content="벌과 생태계의 건강을 위한 첫 걸음, 꿀벌 식당으로 놀러오세요."
      />
      <meta
        property="og:description"
        content="벌과 생태계의 건강을 위한 첫 걸음, 꿀벌 식당으로 놀러오세요."
      />
      <meta
        property="og:image"
        content="http://gpseoulwebserver.co.kr/petitions/beestro/images/common/og.jpg"
      />
      <Script src="https://www.googleoptimize.com/optimize.js?id=GTM-K8RRN9R" async=""></Script>
    </Head>
  );
};

export default SEO;

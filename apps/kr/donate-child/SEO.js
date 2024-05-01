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
      <meta charSet="UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="author" content="Greenpeace"/>
      <meta name="description" content="우리 아이들이 살아갈, 기후위기가 해결된 미래를 만들어 주세요"/>
      <meta name="title" content="우리 아이들에게 건강한 미래를 선물하세요 | 그린피스"/>
      <meta property="og:title" content="우리 아이들에게 건강한 미래를 선물하세요 | 그린피스"/>
      <meta property="og:site_name" content="그린피스 후원하기"/>
      <meta property="og:description" content="우리 아이들이 살아갈, 기후위기가 해결된 미래를 만들어 주세요"/>
      <meta property="og:image" content="https://gpseoulwebserver.co.kr/donation/child/api/child-main.jpg"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://cloud.greensk.greenpeace.org/api-donate-child"/>
      <meta name="keywords" content="그린피스"/>
      <link rel="stylesheet" href="https://gpseoulwebserver.co.kr/asset/css/normalize.css" />
      <link rel="stylesheet" href="https://cloud.greensk.greenpeace.org/css-supporter-volunteer-slick" />
      <link rel="stylesheet" href="https://gpseoulwebserver.co.kr/donation/child/api/child-styles.css" />
      <link rel="icon" type="image/x-icon" href="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/01aca3df-favicon-96x96-1.png" />
      <Script type="text/javascript" src="https://cloud.greensk.greenpeace.org/js-supporter-volunteer-jquery-1.12.4.min"></Script>
      <Script type="text/javascript" src="https://cloud.greensk.greenpeace.org/js-supporter-volunteer-slick.min"></Script>
      <Script type="text/javascript" src="https://cloud.greensk.greenpeace.org/js-supporter-volunteer-volunteer_201103"></Script>
      <Script type="text/javascript" src="./carousel.js"></Script>
      <title>그린피스와 함께, 바다의 마지막 신호를 들어주세요. | 그린피스</title>
    </Head>
  );
};

export default SEO;

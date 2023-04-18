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
      <meta name="description" content="저와 함께, 우리의 지구를 위해 행동해주세요."/>
      <meta name="title" content="그린피스 후원하기 | 나는 북극곰입니다"/>
      <meta property="og:title" content="그린피스 후원하기 | 나는 북극곰입니다"/>
      <meta property="og:site_name" content="그린피스 후원하기"/>
      <meta property="og:description" content="저와 함께, 우리의 지구를 위해 행동해주세요."/>
      <meta property="og:image" content="https://gpseoulwebserver.co.kr/asset/images/rue/share.jpg"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://cloud.greensk.greenpeace.org/api-donate-ryu"/>
      <meta name="keywords" content="류준열, 류준열 그린피스, 나는북극곰이다, 북극, 북극곰, 그린피스, 그린피스 후원"/>
      <link rel="stylesheet" href="https://gpseoulwebserver.co.kr/asset/css/normalize.css" />
      <link rel="stylesheet" href="https://cloud.greensk.greenpeace.org/css-supporter-volunteer-slick" />
      <link rel="icon" type="image/x-icon" href="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/01aca3df-favicon-96x96-1.png" />
      <Script type="text/javascript" src="https://cloud.greensk.greenpeace.org/js-supporter-volunteer-jquery-1.12.4.min"></Script>
      <Script type="text/javascript" src="https://cloud.greensk.greenpeace.org/js-supporter-volunteer-slick.min"></Script>
      <Script type="text/javascript" src="https://cloud.greensk.greenpeace.org/js-supporter-volunteer-volunteer_201103"></Script>
      <Script src="https://www.googleoptimize.com/optimize.js?id=GTM-K8RRN9R" async=""></Script>
      <Script type="text/javascript" src="./carousel.js"></Script>
      <title>그린피스 후원하기 | 나는 북극곰입니다</title>
    </Head>
  );
};

export default SEO;

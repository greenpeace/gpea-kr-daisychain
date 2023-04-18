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
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Greenpeace" />
      <meta name="description" content="" />
      <meta name="title" content="그린피스 | " />
      <meta property="og:title" content="그린피스 | " />
      <meta property="og:site_name" content="Greenpeace " />
      <meta property="og:description" content="그린피스와 함께 세상을 변화시킬 자원활동가가 될 기회를 놓치지 마세요." />
      <meta property="og:image" content="https://image.greensk.greenpeace.org/lib/fe3311717564047d7c1277/m/1/fc088a9b-5446-43fb-a3d2-98f7b6af6007.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://cloud.greensk.greenpeace.org/petitions-supporter-volunteer" />
      <link rel="stylesheet" href="https://gpseoulwebserver.co.kr/asset/css/normalize.css" />
      <link rel="stylesheet" href="https://cloud.greensk.greenpeace.org/css-supporter-volunteer-slick" />
      <Script type="text/javascript" src="https://cloud.greensk.greenpeace.org/js-supporter-volunteer-jquery-1.12.4.min"></Script>
      <Script type="text/javascript" src="https://cloud.greensk.greenpeace.org/js-supporter-volunteer-slick.min"></Script>
      <Script type="text/javascript" src="https://cloud.greensk.greenpeace.org/js-supporter-volunteer-volunteer_201103"></Script>
      <Script type="text/javascript" src="./carousel.js"></Script>
      <Script type="text/javascript">
        window.numberOfResponses = parseInt('%%=v(@NumberOfResponses)=%%', 10);
      </Script>
      <link rel="icon" type="image/x-icon" href="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/01aca3df-favicon-96x96-1.png" />
      <title>Document</title>
    </Head>
  );
};

export default SEO;

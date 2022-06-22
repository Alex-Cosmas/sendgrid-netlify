import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="min-h-screen mx-auto font-main wrap:px-0 bg-wsGrey-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
// import Document, { Html, Head, Main, NextScript } from "next/document";

// export default class MyDocument extends Document {
//   render() {
//     return (
//       <Html>
//         <Head>
//           {/* Global Site Tag (gtag.js) - Google Analytics */}
//           <script
//             async
//             src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
//           />
//           <script
//             dangerouslySetInnerHTML={{
//               __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
//               page_path: window.location.pathname,
//             });
//           `,
//             }}
//           />

//           <link
//             href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
//             rel="stylesheet"
//           />
//         </Head>
//         <body className="min-h-screen mx-auto font-main wrap:px-0 bg-wsGrey-100">
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

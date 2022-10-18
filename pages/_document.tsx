import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#171A25" />
          <link rel="apple-touch-icon" href="/img/pakam-logo.png" />

          <meta name="author" content="Pakam" />
          <meta
            name="description"
            content="Enabling people, planet, and profit."
          />
          <meta name="keywords" content="card, payment, bank, fintech" />
          <meta property="og:image" content="/img/pakam-logo.png" />
          <meta
            property="og:description"
            content="Enabling people, planet, and profit."
          />
          <meta property="og:title" content="Pakam" />

          <link href="/img/pakam-logo.png" rel="icon" type="image/png" />
          <link href="/img/pakam-logo.png" rel="apple-touch-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playball&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="detect.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

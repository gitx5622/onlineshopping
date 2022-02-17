import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

class OnlineShoppingDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff8e22" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default OnlineShoppingDocument;

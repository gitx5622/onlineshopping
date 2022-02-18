import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

class OnlineShoppingDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
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

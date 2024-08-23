import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { renderSnippet, gtagUrl } from "utils/analytics";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script async src={gtagUrl} />
          <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
          <title>Jerome Ramos</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

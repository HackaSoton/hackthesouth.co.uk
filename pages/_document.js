import tachyons from 'tachyons/css/tachyons.min.css'
import hack from '../static/fonts/hack-subset.css'

import Document, { Head, Main, NextScript } from 'next/document'

const GLOBAL_CSS = tachyons + hack + `
  html {
    font-family: Hack, monospace;
  }
`;

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Hack The South UK</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicons/manifest.json" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#feda44" />
          <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
          <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#feda44" />
          <style jsx global>{GLOBAL_CSS}</style>
        </Head>
        <body className="bg-black white">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

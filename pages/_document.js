import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const styleTags = sheet.getStyleElement()

    return (
      <html lang="en">
        <Head>
          <title>Messaging app</title>
          {styleTags}
        </Head>
        <body>
          <Main style={{ height: '100%' }} />
          <NextScript style={{ height: '100%' }} />
        </body>
      </html>
    )
  }
}

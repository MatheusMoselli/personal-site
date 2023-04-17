import { Html, Main, NextScript, Head } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
    <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Righteous&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
    </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

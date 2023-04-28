import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import 'uno.css'
import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'

// import nextI18NextConfig from '../next-i18next.config.js'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>Next.js PWA Example</title>

      </Head>
      <Component {...pageProps} />
    </>
  )
}
// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(App /* , nextI18NextConfig */)

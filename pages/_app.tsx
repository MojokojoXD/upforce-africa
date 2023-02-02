import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Layout from '../components/layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

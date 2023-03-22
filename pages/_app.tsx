import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Layout from '../components/layout/Layout'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: {session,...pageProps},router }: AppProps) {
    const path = router.asPath
    
    if(path.includes('admin')){
        return (
            <SessionProvider session={session}>
                <Component {...pageProps}/>
            </SessionProvider>
        )
    }
  return (
    <Layout>
        <Component {...pageProps}/>
    </Layout>
  )
}

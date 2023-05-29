import Head from 'next/head';
import Image from 'next/image';
import { useState, Fragment,useEffect } from 'react';
import Link from 'next/link';
import { content_links } from '../utils/vars';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Services from '../components/home/Services';

export default function Home() {
  const router = useRouter();

  useEffect(()=> {
    if(typeof window === 'undefined')return;
    window.history.scrollRestoration = 'manual'
  },[])
  
  return (
    <div id='home'>
        <Head>
          <title>Upforce | Home</title>
          {/* <meta name='description' content='Homepage for upforce africa' /> */}
        </Head>
        <Header/>
        <Services/>
    </div>
  );
}



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
        <div className='relative h-[20vh] bg-transparent flex shadow-inner max-w-7xl mx-auto lg:rounded-xl overflow-hidden relative'>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className='bg-entepreneur bg-cover bg-center grow'></div>
            <div className='grow bg-office bg-cover bg-center'></div>
            <div className='grow bg-pyramid bg-cover bg-center'></div>
        </div>
        <Services/>
    </div>
  );
}



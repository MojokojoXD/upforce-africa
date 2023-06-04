import Head from 'next/head';
import Header from '../components/layout/Header';

const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>Upforce | About us</title>
      </Head>
      <Header title='about us' />
      <div className='flex flex-col items-center max-w-xs sm:max-w-lg sm:px-6 lg:px-8 py-10 relative text-slate-800 mx-auto justify-center space-y-5 md:text-slate-300 font-light lg:text-lg'>
        <p className='max-w-[75ch]'>
          UpForce Africa is a top provider of services that support
          international organizations and investors seeking to do business in
          Africa.
         </p>
          
          <p className='max-w-[75ch]'>We aim to simplify and accelerate the initial stages, enabling
          you to start quickly and efficiently. Together with our local
          partners, we serve clients worldwide, making it easier for you to get
          started quickly. </p>
          <p className='max-w-[75ch]'>Explore our wide range of services and connect with
          our expert advisors to unlock exciting opportunities.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

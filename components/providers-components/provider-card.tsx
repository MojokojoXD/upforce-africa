import * as React from 'react';
import Image from 'next/image';
import type { ServiceProvider } from '../../utils/types/cdn';
import { getUrl } from '../../utils/sanity-client';


interface ProviderCardProps {
    providerData: ServiceProvider;
}

export default function ProviderCard({providerData}: ProviderCardProps) {
    const imageUrl = getUrl(providerData.logo.asset)
  return (
    <a href={providerData.location} target='_blank' rel='noreferrer'>
        <div className='card w-[25%] min-w-[150px] max-w-[240px] shadow-xl hover:scale-[.9] hover:outline outline-indigo-400 transition-transform duration-300 ease-in-out mr-5 my-5 pb-5 border shadow-none px-0 overflow-hidden bg-gradient-to-b from-zinc-100 to-indigo-100'>
        <div className='card-body px-0 py-3'>
            <h2 className='text-lg capitalize font-semibold text-center text-gray-700'>{providerData.providerName}</h2>
        </div>
        <figure className='relative aspect-square w-1/2 mx-auto rounded-lg'>
            <Image
            src={imageUrl}
            alt={providerData.providerName}
            fill
            />
        </figure>
        </div>
    </a>
  );
}

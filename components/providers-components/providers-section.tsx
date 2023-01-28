import * as React from 'react'
import ProviderCard from './provider-card';
import type { ServiceProvider } from '../../utils/types/cdn';

interface ProviderSectionProps {
    children: React.ReactNode;
    sectionTitle: string;
    providerDataList: ServiceProvider[];
}

export default function ProviderSection ({children,sectionTitle,providerDataList}:ProviderSectionProps) {
    return (
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-5'>
            <h1 className='text-3xl font-bold capitalize text-gray-700'>{sectionTitle}</h1>
            <div className='flex flex-wrap'>
                {
                   providerDataList.map(p => <ProviderCard providerData={p} key={p._key}/>)
                }
            </div>
        </div>
    )
}
 

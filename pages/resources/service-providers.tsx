import * as React from 'react';
import type { GetStaticProps } from 'next';
import { default as sanity_client } from '../../utils/sanity-client';
import type { ServiceProviderData } from '../../utils/types/cdn';
import ProviderSection from '../../components/providers-components/providers-section';
import Header from '../../components/layout/Header';

interface ServiceProvidersProps {
  providers: ServiceProviderData[];
}

export const getStaticProps: GetStaticProps<
  ServiceProvidersProps
> = async () => {
  const providers: ServiceProviderData[] = await sanity_client.fetch(
    `*[_type=="service-providers"]`
  );

  return {
    props: {
      providers: providers,
    },
  };
};

export default function ServiceProviders({ providers }: ServiceProvidersProps) {
  const {
    automation,
    crm,
    designTools,
    domains,
    emailMarketing,
    events,
    fileStorage,
    finances,
    formsAndSurveys,
    fundraising,
    hosting,
    hr,
    legal,
    tasksProjectManagement,
    webDevelopment,
  } = providers[0];

  return (
    <div >
      <Header title='service providers'/>
      <div className='min-h-screen bg-white py-10 px-6 lg:px-20 text-gray-900'>
        <ProviderSection
          sectionTitle='automation'
          providerDataList={automation}
        />
        <ProviderSection sectionTitle='CRM' providerDataList={crm} />
        <ProviderSection
          sectionTitle='design tools'
          providerDataList={designTools}
        />
        <ProviderSection sectionTitle='domains' providerDataList={domains} />
        <ProviderSection
          sectionTitle='email marketing'
          providerDataList={emailMarketing}
        />
        <ProviderSection sectionTitle='events' providerDataList={events} />
        <ProviderSection
          sectionTitle='file storage'
          providerDataList={fileStorage}
        />
        <ProviderSection sectionTitle='finances' providerDataList={finances} />
        <ProviderSection
          sectionTitle='forms and surveys'
          providerDataList={formsAndSurveys}
        />
        <ProviderSection
          sectionTitle='fundraising'
          providerDataList={fundraising}
        />
        <ProviderSection sectionTitle='hosting' providerDataList={hosting} />
        <ProviderSection sectionTitle='hr' providerDataList={hr} />
        <ProviderSection sectionTitle='legal' providerDataList={legal} />
        <ProviderSection
          sectionTitle='tasks and project management'
          providerDataList={tasksProjectManagement}
        />
        <ProviderSection
          sectionTitle='web development'
          providerDataList={webDevelopment}
        />
      </div>
    </div>
  );
}

import {createClient} from 'next-sanity'
import builder from '@sanity/image-url';


const client = createClient({
    projectId:"e5d5e44n",
    useCdn: true,
    dataset: "production",
    apiVersion: "2023-01-27",
})

export function getUrl(source:any){
    return builder(client).image(source).url();
}


export default client;
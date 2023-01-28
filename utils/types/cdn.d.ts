import type { URL } from "url"


type Asset = {
    _ref: string;
    _type: string;
}

type Logo = {
    _type: "image",
    asset: Asset
}

export type ServiceProvider = {
    _key: string;
    _type: 'provider',
    logo: Logo,
    providerName: string;
    location: URL;
}

export type ServiceProviderData = {
    _createdAt: string,
    _id: string;
    _rev: string;
    _updatedAt: string;
    [key:string]: ServiceProvider[];
}


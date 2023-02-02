import type { Url } from "url"

export type Article = {
    url: Url;
    articleId: string;
    authorsByline: string;
    categories: {name:string}[];
    content: string;
    description: string;
    imageUrl: Url;
    links: string[];
    source: {domain: string};
    summary: string;
    pubDate:string;
    title:string;
}
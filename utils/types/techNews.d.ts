
export type Article = {
    url: string;
    articleId: string;
    authorsByline: string;
    categories: {name:string}[];
    content: string;
    description: string;
    imageUrl: string;
    links: string[];
    source: {domain: string};
    summary: string;
    pubDate:string;
    title:string;
}
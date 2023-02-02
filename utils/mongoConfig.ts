import { MongoClient } from 'mongodb';
import type { Article } from './types/techNews';

export const db_client = new MongoClient(process.env.MONGO_URI as string);

const collection = 'techNews';
const db = 'upforce';

export async function stashNews(articles: Article[]) {
  const connectedClient = await db_client.connect();
  const upforceDb = connectedClient.db(db);
  const techNews = upforceDb.collection(collection);
  const result = await techNews.insertMany(articles);

  if (!result.acknowledged) {
    console.log(result);
    connectedClient.close();
    throw new Error('insertion of articles failed');
  }

  console.log(result);
  connectedClient.close();
  return;
}

export async function getStoriesDB() {
  let stories: any;
  const connectedClient = await db_client.connect();
  const upforceDb = connectedClient.db(db);
  const col = upforceDb.collection(collection);

  const cursor = await col
    .find()
    .project({
      imageUrl: 1,
      categories: 1,
      content: 1,
      _id: 0,
      url: 1,
      articleId: 1,
      authorsByline: 1,
      description: 1,
      summary: 1,
      links: 1,
      source: 1,
      pubDate: 1,
      title: 1,
    })
    .limit(30);

  stories = cursor.toArray();

  return stories;
}

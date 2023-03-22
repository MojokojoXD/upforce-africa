import { MongoClient } from 'mongodb';
import type { Article } from './types/techNews';
import type { Credentials } from 'google-auth-library';


export const db_client = new MongoClient(process.env.MONGO_URI as string);
//test
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

export async function getStoriesDB(offset?: number) {
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
    .limit(9);

  stories = cursor.skip(!offset ? 0 : offset).toArray();

  return stories;
}

export const stashTokens = async (tokens: Credentials) => {
  const c_client = await db_client.connect();
  try {
    const database = c_client.db('upforce');
    const collection = database.collection('tokens');

    const res = await collection.insertOne(tokens);

    console.log(res)

    c_client.close();
  } catch (error) {
        console.log(error)
        c_client.close()
  }
};

export const getTokens = async() : Promise<Credentials> => {
    const c_client = await db_client.connect();
    let tokens;
    try {
        const collection = c_client.db('upforce').collection('tokens');
        const res = await collection.findOne({},{projection:{_id:0}})

        tokens = res;

        c_client.close();
    } catch (error) {
        console.log(error);
        c_client.close();
    }
    
    return tokens;
}
import { MongoClient } from 'mongodb';
import type { Article } from './types/techNews';
import type { Credentials } from 'google-auth-library';
import { forms_v1 } from 'googleapis';
import { MongoServerError } from 'mongodb';

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

    console.log(res);

    c_client.close();
  } catch (error) {
    console.log(error);
    c_client.close();
  }
};

export const getTokens = async (): Promise<Credentials> => {
  const c_client = await db_client.connect();
  let tokens;
  try {
    const collection = c_client.db('upforce').collection('tokens');
    const res = await collection.findOne({}, { projection: { _id: 0 } });

    tokens = res;

    c_client.close();
  } catch (error) {
    console.log(error);
    c_client.close();
  }

  return tokens;
};

export class Mongo {
  protected static client = db_client;
  protected static db = 'upforce';
}

export class Jobs extends Mongo {
  private static collection = 'approved_jobs';

  static async sendApproved(data: any) {
    try {
      Jobs.client = await Jobs.client.connect();
      const collection = Jobs.client.db(Jobs.db).collection(Jobs.collection);
      const result = await collection.insertOne(data);
      console.log(result);

      Jobs.client.close();
    } catch (error) {
      if (error instanceof MongoServerError) {
        return error.code
      } else console.log(error);
      Jobs.client.close();
    }
  }

  static async deleteApproved(responseId: string) {
    try {
      Jobs.client = await Jobs.client.connect();
      const collection = Jobs.client.db(Jobs.db).collection(Jobs.collection);
      const result = await collection.deleteOne({ responseId: responseId });
      console.log(result);

      Jobs.client.close();
    } catch (error) {
      console.log(error);
      Jobs.client.close();
    }
  }

  static async getApproved(offset?: number) {
    let data;
    try {
      Jobs.client = await Jobs.client.connect();
      const collection = Jobs.client.db(Jobs.db).collection(Jobs.collection);
    const cursor = collection.aggregate([
            {
                $project: {
                    _id: 0,
                    createTime: {$toString: "$createTime"},
                    approvedAt: {$toString: "$approvedAt"},
                    answers: 1,
                    responseId: 1,
                    lastSubmittedTime: 1,
                }
            }
        ])


      data = await cursor.toArray()

      Jobs.client.close();

      return data;
    } catch (error) {
      console.log(error);
      Jobs.client.close();
      return undefined;
    }
  }
}

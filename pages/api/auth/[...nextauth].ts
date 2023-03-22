import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { AuthOptions } from 'next-auth';
import { v4 as uuidv4 } from 'uuid';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if(credentials === undefined)throw new Error('credentials object is undefined')
        if (
          credentials.username === process.env.ADMIN &&
          credentials.password === process.env.ADMIN_PASS
        ) {
          return {
            id: uuidv4(),
            name: 'upforceAdmin',
            email: 'upforce@gmail.com'
          };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    maxAge: 60 * 60 * 2,
  },
};

export default NextAuth(authOptions);

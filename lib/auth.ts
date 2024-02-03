import { getServerSession } from 'next-auth';
import Google from 'next-auth/providers/google';
import type { NextAuthOptions } from 'next-auth';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '@/config';

const googleClientId = GOOGLE_CLIENT_ID;
const googleClientSecret = GOOGLE_CLIENT_SECRET;

if (!googleClientId || !googleClientSecret) {
  throw new Error('Missing env variables for google auth');
}

export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  pages: {
    signIn: '/signin',
    signOut: '/signout',
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);

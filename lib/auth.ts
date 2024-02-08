import { getServerSession, type NextAuthOptions } from 'next-auth';
import Google from 'next-auth/providers/google';

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

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

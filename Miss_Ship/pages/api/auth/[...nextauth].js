import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { fbAuth } from 'javascripts/firebaseConfig';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import dotenv from 'dotenv';

dotenv.config();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        const googleCredential = GoogleAuthProvider.credential(account?.id_token);
        const userCredential = await signInWithCredential(fbAuth, googleCredential).catch(e => {
          console.log(e);
          return false;
        });

        return userCredential ? true : false;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
});

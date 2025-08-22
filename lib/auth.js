import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcryptjs';
import clientPromise from './mongodb';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const client = await clientPromise;
          const db = client.db('product_store');
          const user = await db.collection('users').findOne({
            email: credentials.email
          });

          if (!user) {
            return null;
          }

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role || 'user',
            createdAt: user.createdAt,
            productsAdded: user.productsAdded || 0,
            avatar: user.profile?.avatar || null
          };
        } catch (error) {
          console.error('Authentication error:', error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === 'google') {
        try {
          const client = await clientPromise;
          const db = client.db('product_store');

          // Check if user already exists
          const existingUser = await db.collection('users').findOne({
            email: user.email
          });

          if (!existingUser) {
            // Create new user for Google OAuth
            const newUser = {
              name: user.name,
              email: user.email,
              role: 'user',
              createdAt: new Date(),
              productsAdded: 0,
              provider: 'google',
              googleId: profile.sub,
              profile: {
                avatar: user.image || null
              }
            };

            const result = await db.collection('users').insertOne(newUser);
            console.log('Created new Google user:', result.insertedId);
          } else {
            // Update existing user with Google info if needed
            await db.collection('users').updateOne(
              { email: user.email },
              {
                $set: {
                  provider: 'google',
                  googleId: profile.sub,
                  'profile.avatar': user.image || existingUser.profile?.avatar || null
                }
              }
            );
            console.log('Updated existing user for Google OAuth:', existingUser._id);
          }

          return true;
        } catch (error) {
          console.error('Google OAuth error:', error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
      if (account?.provider === 'google') {
        try {
          const client = await clientPromise;
          const db = client.db('product_store');
          const dbUser = await db.collection('users').findOne({
            email: token.email
          });

          if (dbUser) {
            token.sub = dbUser._id.toString(); // This is crucial for session.user.id
            token.role = dbUser.role || 'user';
            token.productsAdded = dbUser.productsAdded || 0;
            token.createdAt = dbUser.createdAt;
            token.avatar = dbUser.profile?.avatar || null;
            token.provider = 'google';
          }
        } catch (error) {
          console.error('JWT callback error:', error);
        }
      }

      if (user) {
        token.role = user.role;
        token.productsAdded = user.productsAdded;
        token.createdAt = user.createdAt;
        token.avatar = user.avatar;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
        session.user.role = token.role;
        session.user.productsAdded = token.productsAdded;
        session.user.createdAt = token.createdAt;
        session.user.avatar = token.avatar;
        session.user.provider = token.provider;
      }
      return session;
    }
  },
  pages: {
    signIn: '/auth/login',
    signUp: '/auth/register',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

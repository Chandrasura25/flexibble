import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
//   jwt: {
//     encode: async ({ secret, token }) => {},
//     decode: async ({ secret, token }) => {
//       const decodedToken = jsonwebtoken.verify(token, secret);
//       return decodedToken as JWT;
//     },
//   },
  theme: {
    logo: "/logo.png",
    colorScheme: "light",
  },
  callbacks: {
    async session({ session }) {},
    async signIn({ user }) {},
  },
};

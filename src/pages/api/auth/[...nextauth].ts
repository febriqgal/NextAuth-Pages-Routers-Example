import NextAuth, { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
var bcrypt = require("bcryptjs");
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "text" },
      },
      async authorize(credentials, req) {
        const res = await fetch(
          `http://127.0.0.1:8000/api/users/${credentials?.email}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = await res.json();
        const user = await data.data;
        console.log(user);
        const inPassowrd = await bcrypt.compare(
          credentials?.password,
          user.password
          // res === true
        );
        console.log(inPassowrd);
        if (!res.ok) {
          return console.log(res.status);
        } else if (!inPassowrd) {
          return null;
        } else if (res.ok && user) {
          return user;
        } else {
          return console.log(res.status);
        }
      },
    }),
  ],
  theme: { colorScheme: "light" },
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/signup",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token }) {
      console.log(token);
      return token;
    },

    session: ({ session, token, user }: any) => {
      if (token) {
        session.user.image =
          "https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.accessToken = token.jti;
      }
      console.log(session);
      return session;
    },
  },
};
export default NextAuth(authOptions);

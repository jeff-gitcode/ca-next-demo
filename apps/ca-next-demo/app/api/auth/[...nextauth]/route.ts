import NextAuth from "next-auth"
import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
// import type { JWT } from "next-auth/jwt";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "johndoe@test.com" },
        password: { label: "Password", type: "password" }
      },
      authorize: (credentials) => {
        console.log(credentials);
        if (credentials) {
          return { id: "1", email: credentials.email, name: credentials.email, image: "" }
        }

        return null;
        // if (typeof credentials !== "undefined") {
        //   const res = null;
        //   if (typeof res !== "undefined") {
        //     return null;
        //   } else {
        //     return null
        //   }
        // } else {
        //   return null
        // }
      }
    })
  ],
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === 'development' ? true : false,
  // session: { strategy: "jwt" },
  callbacks: {
    async session({ session }) {
      // console.log("user", user);
      // console.log("token", token);

      // const sessionUser = {
      //   name: user?.name,
      //   email: user?.email,
      //   image: user?.image,
      // };

      // if (token){
      //   session.user = sessionUser;
      //   const current = new Date();
      //   session.expires = new Date(current.getTime() + 86400000).toISOString();
      // }

      console.log("session", session);
      return session;
      // const sanitizedToken = Object.keys(token).reduce((p, c) => {
      //   // strip unnecessary properties
      //   if (
      //     c !== "iat" &&
      //     c !== "exp" &&
      //     c !== "jti" &&
      //     c !== "apiToken"
      //   ) {
      //     return { ...p, [c]: token[c] }
      //   } else {
      //     return p
      //   }
      // }, {})
      // return { ...session, user: sanitizedToken, apiToken: token.apiToken }
    },
    async jwt({ token, user }) {
      // if (typeof user !== "undefined") {
      //   // user has just signed in so the user object is populated
      //   return token as JWT
      // }
      if (user) {
        token.id = user.id;
      }

      console.log("token", token);
      return token;
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

// import NextAuth from "next-auth"
// // import jwtDecode, {JwtPayload} from 'jwt-decode';
// import type { AuthOptions } from 'next-auth';
// import CredentialsProvider from "next-auth/providers/credentials";
// // import Credentials from "next-auth/providers/credentials";
// // import { z } from 'zod';

// import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github";

// export const authOptions: AuthOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string,
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID as string,
//       clientSecret: process.env.GOOGLE_SECRET as string,
//     }),
//     // ...add more providers here
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "johndoe@test.com" },
//         password: { label: "Password", type: "password" }
//       },
//       authorize: (credentials) => {
//         console.log(credentials);
//         if (credentials?.email === "johndoe@test.com" && credentials?.password === "password") {
//           return { id: "1", email: credentials.email, name: credentials.email, image: "https://www.gravatar.com/avat" }
//         }

//         return null;
//         // if (typeof credentials !== "undefined") {
//         //   const res = null;
//         //   if (typeof res !== "undefined") {
//         //     return null;
//         //   } else {
//         //     return null
//         //   }
//         // } else {
//         //   return null
//         // }
//       }
//     })],
//   session: { strategy: "jwt" },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
// // export default NextAuth({authOptions})

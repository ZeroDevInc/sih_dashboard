import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import { auth } from "app/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials;
                return await signInWithEmailAndPassword(auth, email, password)
                    .then((res) => {
                        return fetch('https://sihdashboardapi-chaitanyakanhar2004.b4a.run/login/', {
                            method: "POST",
                            body: JSON.stringify({ token: res._tokenResponse.idToken }),
                            contentType: "application/json",
                        })
                        .then((res) => res.json())
                        .then(data => {
                            console.log(data);
                            return data;
                        })
                    }).catch((err) => {
                        console.log({ "error": err.message });
                    }) || null;
                }
            })
    ],
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/signin"
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }

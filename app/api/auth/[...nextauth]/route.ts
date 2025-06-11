import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "example@email.com"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const password = credentials?.password;
                //db reqs to check if this usernam and passowrd are correct
                const user = {
                    name: "shatadal",
                    id: "1",
                    username: "shatadal@gmail.com"
                }
                if (user) {
                    return user;
                } else {
                    return null;
                }

            }
        }),

        GoogleProvider({
            clientId: "asd",
            clientSecret: "asd"
        }),

        FacebookProvider({
            clientId: "asd",
            clientSecret: ""
        })
    ]
});

export {handler as GET, handler as POST}

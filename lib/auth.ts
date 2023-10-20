import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import prisma from "@/prisma";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            name: "sign In",
            credentials: {
                email: { label: "email", placeholder: "type email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                if (!credentials?.email || !credentials?.password) {
                    // if credentials are not given (if empty form)
                    return null
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email,
                    }
                });

                //?? if user match with that mail , or no exist
                if (!user) return null
                //?? check if password match
                const isPassMatch = await compare(credentials.password, user?.password);

                //?? if pass no match 
                if (!isPassMatch) return null;

                //if all condition are great, we return user data 
                return {
                    id: user?.id,
                    email: user?.email,
                    name: user?.name,
                    //?? randomKey:"Hey Cool"
                }
            }

        })
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session?.user,
                    id: token?.id,
                    randomKey: token?.randomKey
                }
            }
        },
        jwt: ({ token, user }) => {
            if (user) {
                const temp_user = user as unknown as any;
                return {
                    ...token,
                    id: temp_user?.id,
                    randomKey: temp_user?.randomKey
                }
            }
            //?? return token 
            return token;
        }
    }
}
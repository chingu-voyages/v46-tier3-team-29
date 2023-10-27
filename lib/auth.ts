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

                try {
                    if (!credentials?.email || !credentials?.password) {
                        // if credentials are not given (if empty form)
                        return null;
                    }

                    const user = await prisma.user.findUnique({
                        where: { email: credentials.email },
                        // select: { email: true },
                    });
                    console.log("user: ", user)
                    if (!user) {
                        console.log("No user with that email");
                        return null;
                    }

                    const isPassMatch = await compare(credentials.password, user.password);

                    if (!isPassMatch) {
                        console.log("Incorrect password");
                        return null;
                    } else {
                        console.log("Authentication successful");
                        console.log(user);
                        return {
                            id: user.id,
                            email: user.email,
                            name: user.name,
                            randomKey: "Hey Cool"
                        };
                    }
                } catch (err) {
                    console.log("An error occurred:", err);
                    return null;
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
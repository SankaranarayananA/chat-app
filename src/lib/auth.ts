import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import { NextAuthOptions } from "next-auth";
import { db } from "./db";
import GoogleProvider from "next-auth/providers/google";
import { fetchRedis } from "@/helpers/redis";

function getGoogleCredentials() {
    if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
        throw new Error("Missing Google Client ID or Secret");
    }
    const clientid = process.env.GOOGLE_CLIENT_ID;
    const clientsecret = process.env.GOOGLE_CLIENT_SECRET;
    return {
        clientid,
        clientsecret,
    };
}

export const authOptions: NextAuthOptions = {
    adapter: UpstashRedisAdapter(db),
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn:"/login"
    },
    providers: [
        GoogleProvider({
            clientId: getGoogleCredentials().clientid,
            clientSecret: getGoogleCredentials().clientsecret,
        }),
    ],
    callbacks:{
        async jwt({token, user}){
            const dbUserResult = await fetchRedis('get',`user:${token.id}`) as string;

            if(!dbUserResult){
                token.id = user!.id;
                return token;
            }
            const dbUser = JSON.parse(dbUserResult) as User;
            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image,
            }
        },

        async session({session, token}){
            if(token){
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.picture;
            }
            return session;
        },
       redirect(){
        return "/dashboard";
       },
    }
}


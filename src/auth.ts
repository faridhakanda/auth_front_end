import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const {
    handlers: { GET, POST},
    auth,
    signIn,
    signOut
} = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                try {
                    const response = await fetch("http:/127.0.0.1:8000/login/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            //username: credentials.username,
                            email: credentials.email,
                            password: credentials.password
                        }),
                    });
                    if (response.ok) {
                        const data = await response.json();
                        // console.log("Authorize return data: ", {
                        //     id: data.id,
                        //     username: data.user.username,
                        //     email: data.email,
                        //     accessToken: data.access,
                        //     refreshToken: data.refresh
                        // });
                        return {
                            id: data.id,
                            username: data.user.username,
                            email: data.email,
                            password: data.user.password,
                            accessToken: data.access,
                            refreshToken: data.refresh
                        }
                    } else {
                        const errorData = await response.json();
                        throw new Error(errorData.detail || "Invalid credentials!");
                    } 
                }catch(error: any) {
                    throw new Error(error.message || "Failed to log in");
                }
            }
        })
        
    ],
    callbacks: {
        async session({ session, token }) {
            session.user = {
                ...session.user,
                username: token.username,
            };
            //console.log("Session object: ", session);
            return session;
        },
        async jwt({token, user}) {
            if (user) {
                token.username = user.username;
            }
            //console.log("JWT Token: ", token);
            return token;
        }
    }
})
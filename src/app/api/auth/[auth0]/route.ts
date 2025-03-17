// app/api/auth/[auth0]/route.ts
import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

import { NextApiRequest, NextApiResponse } from 'next';

export const GET = handleAuth({
    login:handleLogin({
        returnTo: "/dashboard"
    }),
    signup: handleLogin({
        authorizationParams:{
            screen_hint: "signup",
        },
        returnTo: "/dashboard",
    }),
})

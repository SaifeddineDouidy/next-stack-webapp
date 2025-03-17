// middleware.ts
import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export default withMiddlewareAuthRequired({
  returnTo: (req) => req.nextUrl.pathname, // Redirects to the originally requested path after login
});

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
};

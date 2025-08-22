import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        // Allow access to auth pages for everyone
        if (pathname.startsWith('/auth/')) {
          return true;
        }

        // Protect admin routes
        if (pathname.startsWith('/dashboard')) {
          return token?.role === 'admin';
        }

        // Protect profile page
        if (pathname.startsWith('/profile')) {
          return !!token;
        }

        // Allow all other routes
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/auth/:path*'
  ]
};

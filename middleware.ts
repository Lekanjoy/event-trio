import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
import { getUser } from './app/(auth)/login/action';

export async function middleware(request: NextRequest) {
  const res = await updateSession(request)

  const pathname = request.nextUrl.pathname
  const isAuthPage = ['/login', '/sign-up'].includes(pathname);
  const user = await getUser();

  if (isAuthPage) {
    // If signed in and on auth page, redirect to home
    if (user) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return res
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    "/",
    "/login",
    "/sign-up",
  ],
};
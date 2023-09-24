import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = req.url;

  // If it's the root path, just render it
  if (path === "/") {
    return NextResponse.next();
  }
    
      const session = getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });
  // const session = getToken({
  //   req,
  //   secret: process.env.NEXTAUTH_SECRET,
  // });

  if (!session && path === "/protected") {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (await session && (path === "/login" || path === "/register")) {
    return NextResponse.redirect(new URL("/protected", req.url));
  }
  return NextResponse.next();
}

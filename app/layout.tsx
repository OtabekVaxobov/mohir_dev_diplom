// These styles apply to every route in the application
import "../styles/globals.css";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import AuthStatus from "../components/auth-status";
import { Suspense } from "react";



const title = "Next.js Prisma Postgres Auth Starter";
const description =
  "This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.";

export const metadata: Metadata = {
  title,
  description,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <Suspense fallback="Loading...">
          
          <AuthStatus />
        </Suspense>
        {children}
      </body>
    </html>
  );
}

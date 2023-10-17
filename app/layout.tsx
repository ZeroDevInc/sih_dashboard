"use client";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import Navigation from "@/components/Navigation";
import {AuthProvider} from "./Providers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <Navigation>{children}</Navigation>
        </AuthProvider>
      </body>
    </html>
  );
}

"use client";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";

import SignIn from "./auth/signin/page";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {isLoggedIn ? (
    
            <div className="flex h-screen overflow-hidden">
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          
          ) : ( <SignIn /> )}
          
        </div>
      </body>
    </html>
  );
}
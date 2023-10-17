
import React from "react"
import Sidebar from "../Sidebar"
import Header from "../Header"

import { useState } from "react";
import { useSession } from "next-auth/react";

function Navigation({children}) {

    const {data: session} = useSession();

    const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
        <div className="flex h-screen overflow-hidden">
            { session?.user && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>} 
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                { session?.user && <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>}
                <main>
                    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    </div>
  )
}

export default Navigation
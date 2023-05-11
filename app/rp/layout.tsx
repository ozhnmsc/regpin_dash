"use client";

import { SessionProvider } from "next-auth/react";

import Header from "@/components/dash/header"
import Sidebar from "@/components/dash/sidebar"
import Footer from "@/components/dash/footer"


export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
   

    return (
  <SessionProvider>
  <div className="bg-gray-50">
  <Header />
  {/* Dashboard Container with Sidebar */}
  <div className="flex border-b border-gray-200 ">
  <div className="w-1/6 h-screen bg-gray-50 border-r border-gray-200">
  <Sidebar />
  </div>
  {/* Dashboard Content */}
  <div className="w-5/6 px-4 py-4 h-screen bg-white">
    {children}
  </div>
  
    </div>
  <Footer />
</div>
</SessionProvider>
    )
  }
  
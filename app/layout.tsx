import './globals.css'
import { Inter } from 'next/font/google'
import Toaster from "@/components/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Regpin Home and App',
  description: 'Desc for Regpin Home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
 
  return (
    <html lang="en">
      <head><link rel="icon" type="image/png" href="/purplepin.png" /></head>
      <body className={inter.className}>
        <Toaster />
       
        {children}
        </body>
    </html>
  )
}

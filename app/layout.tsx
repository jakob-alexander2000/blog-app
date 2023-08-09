import './globals.css'

import { Open_Sans } from "next/font/google";
import Navbar from "app/(shared)/Navbar";
// import Footer from "app/(shared)/Footer";
//set openSans for entire page using next-fonts
const openSans = Open_Sans({
  subsets: ["latin"],
})
export const metadata = {
  title: 'Blog Application',
  description: 'Blog built using Next.js AppRouter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className}lang="en">
      <body>
         <Navbar />
         {children}
         </body>
        {/* <Footer /> */}
    </html>
  )
}

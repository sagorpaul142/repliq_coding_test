import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../globals.css";

import { cn } from "@/lib/utils"
import Header from "@/components/marketing/header/header";
import Footer from "@/components/marketing/footer/footer";
import Newsletter from "@/components/marketing/newsletter";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Home Page",
  description: "Generated by create next app",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={cn(
      "min-h-screen bg-background font-sans antialiased bg-[#F8F8F8]",
      fontSans.variable
    )}>
    <Header/>
    {children}
    <Newsletter/>
    <Footer/>
    </body>
    </html>
  );
}

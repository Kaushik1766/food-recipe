import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Kalam({
  subsets: ["latin"],
  weight: ['400', '300', '700']
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='garden' id="main">
      <body className={inter.className + ' text-lg'}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

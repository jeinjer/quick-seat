import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Main/Main";

const inter = Inter({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Venta de Entradas",
  description: "Simple aplicación para venta de entradas de diversos eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-700`}>
        
        <Toaster toastOptions={{
          style: {
            background: 'rgb(51 65 85)',
            color: 'white',
          },
        }}/>

        <Suspense>
          <div className="flex flex-col min-h-screen">
            <Header/>
            <Main/>
            <Footer/>
          </div>
        </Suspense>

        </body>
    </html>
  );
}

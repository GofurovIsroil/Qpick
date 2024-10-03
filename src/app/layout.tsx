"use client";

import "./globals.css";
import { Header } from "@/components/Layout/Header/Header";
import { Footer } from "@/components/Layout/Footer/Footer";
import { FavoriteProvider } from "../../context/FavoriteContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#EAEAEA] h-screen flex flex-col">
        <FavoriteProvider>
          <Header />
          {children}
          <Footer />
        </FavoriteProvider>
      </body>
    </html>
  );
}

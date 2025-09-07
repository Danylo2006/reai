import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import Header from "@/app/_components/header";

export const metadata: Metadata = {
  title: "REAI",
  description: "Real Estate AI Simulator",
  icons: [{ rel: "icon", url: "/favicon.ico" }], // @Danylo2006 change to our logo
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="flex h-full flex-col">
        <Header />
        <TRPCReactProvider>
          <div className="flex flex-1 flex-col">{children}</div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}

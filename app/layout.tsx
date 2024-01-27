import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poetry Chain",
  description: "Make a poem, person by person",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={twMerge(inter.className, 'bg-bg-color')} suppressHydrationWarning={true}>
        <a href="/" className="absolute right-4 top-4" >Reset</a>
        {children}
      </body>
    </html>
  );
}

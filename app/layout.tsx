import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { twMerge } from "tailwind-merge";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const satisfy = Playfair_Display({ subsets: ["latin"], weight: "400" });

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
      <body className={twMerge(inter.className, satisfy.className, 'bg-bg-color')} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}

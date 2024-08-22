import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { db } from "@/lib/db";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

export const metadata: Metadata = {
  title: "HaloPIPS!",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

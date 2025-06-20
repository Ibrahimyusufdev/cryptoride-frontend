import type { Metadata } from "next";
import {
  Inter,
  Manrope,
  Archivo_Black,
} from "next/font/google";

import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
});



export const metadata: Metadata = {
  title: "Crypto RIde",
  description: "Ride Sharing on Starknet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} ${archivo.variable}`}>
        {children}
      </body>
    </html>
  );
}

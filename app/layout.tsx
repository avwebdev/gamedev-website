import type { Metadata } from "next";
import { Inter, Tomorrow } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

const calSans = localFont({
  src: "./fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal-sans",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const tomorrow = Tomorrow({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-tomorrow",
});

export const metadata: Metadata = {
  title: "AV Game Dev",
  description: "Amador Valley Game Dev is a club at Amador Valley High School, based in Pleasanton, CA. At AV Game Dev, we provide our member with the chance to explore the world of game development, from programming to art to sound design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${calSans.variable} ${geistSans.variable} ${geistMono.variable} ${inter.variable} ${tomorrow.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

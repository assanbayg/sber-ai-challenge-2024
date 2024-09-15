import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/common/header";
import { Footer } from "./components/common/footer";
import { Analytics } from "@vercel/analytics/react";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pandas",
  description: "Найдите лучшие курсы у нас. Для Sber AI challenge 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

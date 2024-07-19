import { type Metadata } from "next";
import { Roboto, Roboto_Mono } from 'next/font/google';
import { Footer } from "./footer";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: "--font-sans",
  display: 'swap',
})

export const robotoMono = Roboto_Mono({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: "--font-mono",
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Next 15 Showcase by eser.live",
  description: "Playground app for Next.js 15 features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoMono.variable}`}>
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <main className="row-start-2 min-w-[400px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

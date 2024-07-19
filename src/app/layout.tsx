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
        <div className="font-sans flex flex-col min-h-screen">
          <main className="flex-1 flex justify-center items-center p-5">
            <div className="flex-1 ~text-sm/xl max-w-[clamp(320px,40vw,1200px)] mx-auto">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

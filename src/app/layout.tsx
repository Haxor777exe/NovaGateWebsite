import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CursorGlow from "@/components/cursor";
import CyberCursor from "@/components/cursor";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import ClientWrapper from "@/components/clientwrapper";
import Spline from '@splinetool/react-spline'

const JetBrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Regular.woff2",
  variable: "--font-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "NovaGate Solutions | AI & Automation Experts",
  description: "Unlock efficiency with AI-driven automation, voicebots, chatbots, and smart code development. Transform your business with NovaGate Solutions.",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={JetBrainsMono.variable}>
      <body>
        {/* Spline container without negative z-index */}
        <div className="fixed top-0 left-0 w-full h-full z-0">
          <Spline
            scene="https://prod.spline.design/3ZSlT5qmDNmDn0Xv/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>


        <div className="relative z-10">
          <ClientWrapper>
            <NextIntlClientProvider messages={messages}>
              <div className="matrix-grid" />
              <Navbar />

              <div>
                {children}
                <CyberCursor />
              </div>
              <Footer />
            </NextIntlClientProvider>
          </ClientWrapper>
        </div>
        <div className="fixed bottom-4 right-4 bg-black text-white px-3 py-2 rounded-lg shadow-lg text-lg z-[9999]">
          Made by <span className="font-bold">NovaGate</span>
        </div>
      </body>
    </html>
  );
}
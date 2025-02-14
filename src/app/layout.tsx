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
        <ClientWrapper>
          <NextIntlClientProvider messages={messages}>
            <div className="matrix-grid" />
            <Navbar />
            <div className="relative z-10">
              {children}
              <CyberCursor />
            </div>
            <Footer />
          </NextIntlClientProvider>
        </ClientWrapper>
      </body>
    </html>
  );
}
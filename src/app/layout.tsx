import type { Metadata } from "next";
import "./globals.css";

import Script from "next/script";

import { ThemeProvider } from "@/src/components/ThemeProvider";
import SWRProvider from "./SWRProvider";

import Navigation from "@/src/components/Navigation";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Jiwon Log",
  description: "Small steps are still progress, 공부한 것을 기록하고 보관하기 위한 기술 블로그입니다.",
  openGraph: {
    title: "Jiwon log",
    description: "Small steps are still progress, 공부한 것을 기록하고 보관하기 위한 기술 블로그입니다.",
    images: "/og_image.png",
    url: "https://jiwon.blog",
    locale: "ko-KR",
    type: "website",
  },
  twitter: {
    images: "/og_twitter.png",
  }
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased">
        <SWRProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navigation />
            <div className="w-screen flex flex-col justify-between">
              <main className="w-screen max-w-4xl mx-auto py-5 px-8 min-h-[calc(100vh-5rem-7rem)] md:min-h-[calc(100vh-5rem-9rem)]">
                <article className="flex flex-col gap-8">{children}</article>
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </SWRProvider>
      </body>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="gtag"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
    </html>
  );
}

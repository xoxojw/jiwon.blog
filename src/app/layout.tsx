import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import SWRProvider from "./SWRProvider";

import Navigation from "@/src/components/Navigation";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Jiwon Log",
  description: "Small steps are still progress, 공부한 것을 기록하고 보관하기 위한 기술 블로그입니다.",
  icons: {
    icon: "/logo/favicon.ico",
  },
  openGraph: {
    title: "Jiwon log",
    description: "Small steps are still progress, 공부한 것을 기록하고 보관하기 위한 기술 블로그입니다.",
    url: "https://jiwon.blog",
    locale: "ko-KR",
    type: "website",
  },
};

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
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/src/components/Navigation";
import { ThemeProvider } from "@/src/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Jiwon Log",
  description: "안녕하세요, 프론트엔드 개발자 박지원입니다.",
  icons: {
    icon: "/logo/favicon.ico"
  },
  openGraph: {
    title: "Jiwon log",
    description: "안녕하세요, 프론트엔드 개발자 박지원입니다.",
    // url: "jiwon.blog",
    locale: "ko-KR",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-light-bgColor dark:bg-dark-bgColor">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <main className="w-screen min-h-[50rem] max-w-4xl mx-auto py-5 px-8">
            <article className="flex flex-col gap-16">
              {children}
            </article>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

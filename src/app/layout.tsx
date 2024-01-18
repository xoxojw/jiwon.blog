import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Jiwon Log",
  description: "안녕하세요, 프론트엔드 개발자 박지원입니다.",
  icons: {
    icon: "/icons/favicon.ico"
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
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

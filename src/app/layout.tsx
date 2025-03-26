import type { Metadata } from "next";
import "./globals.css";
import { Jua } from "next/font/google";
import Background from "./components/background/BackgroundPage";

const jua = Jua({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "정우 첫 프로젝트 연습",
  description: "정우 첫 프로젝트 연습",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${jua.className}`}>
        <Background children={children}/>
        </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Noto_Sans_Thai, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LangProvider } from "@/context/LangContext";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-thai",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Lao Hug Travel",
  description: "Explore Laos with Lao Hug Travel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" dir="ltr">
      <body
        className={`${notoSansThai.variable} ${notoSansSC.variable}`}
      >
        <LangProvider>
          <main>{children}</main>
        </LangProvider>
        <Toaster />
      </body>
    </html>
  );
}

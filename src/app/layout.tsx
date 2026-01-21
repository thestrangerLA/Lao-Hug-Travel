import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LangProvider } from "@/context/LangContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const notoSansThai = Noto_Sans_Thai({ 
  subsets: ["thai", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-thai",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-kufi-arabic",
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
        className={`${inter.variable} ${notoSansThai.variable} ${notoKufiArabic.variable}`}
      >
        <LangProvider>
          <main>{children}</main>
        </LangProvider>
        <Toaster />
      </body>
    </html>
  );
}

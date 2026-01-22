import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LangProvider } from "@/context/LangContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
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
        className={`${plusJakartaSans.variable} ${notoKufiArabic.variable}`}
      >
        <LangProvider>
          <main>{children}</main>
        </LangProvider>
        <Toaster />
      </body>
    </html>
  );
}

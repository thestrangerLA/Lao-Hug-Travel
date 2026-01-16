import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LangProvider } from "@/context/LangContext";

const noto = Noto_Sans_Thai({ 
  subsets: ["thai", "latin"],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Lao Hug Travel",
  description: "Explore Laos with Lao Hug Travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={noto.className}>
        <LangProvider>
          {children}
        </LangProvider>
        <Toaster />
      </body>
    </html>
  );
}

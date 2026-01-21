import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LangProvider } from "@/context/LangContext";
import { Header } from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const kanit = Kanit({ 
  subsets: ["thai", "latin"],
  weight: ['300', '400', '500', '700'],
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
      <body className={kanit.className}>
        <LangProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LangProvider>
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PTAQ - Książki o ptakach dla dzieci",
  description:
    "Wydawnictwo PTAQ specjalizuje się w książkach o ptakach dla dzieci. Poznaj nasze serie: PTAQ 3+, PTAQ 6+ i PTAQ Uczy.",
  keywords: "książki dla dzieci, ptaki, edukacja, natura, dzieci",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

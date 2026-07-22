import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IINSPARK - Igniting Young Minds",
  description: "Experience transformative learning through science, art, technology, and creativity. IINSPARK offers educational experiences designed to nurture confident creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-brand-blue selection:text-white">
        <NavBar />
        <main className="flex-1 w-full pt-[76px] md:pt-[84px]">{/* offset for fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

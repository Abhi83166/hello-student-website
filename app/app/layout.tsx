
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello Student - Premium Student Accommodation in Mumbai",
  description: "Find your perfect home away from home with Hello Student. We provide hassle-free and technology-driven living experiences to students in Mumbai with furnished rooms, Wi-Fi, meals, and more.",
  keywords: "student accommodation, Mumbai, student housing, furnished rooms, student living, Hello Student",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Shell } from "@/components/layout/Shell";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dennis Tjay - Portfolio",
  description: "Developer, AI Agent Builder, AI Trainer, and Data Science Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} antialiased`}>
      <body className="bg-background text-foreground min-h-screen flex flex-col selection:bg-primary/30 selection:text-white">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}

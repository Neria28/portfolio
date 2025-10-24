import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/utils/cn";
import { ThemeProvider } from "@/components/theme-provider";
import * as React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neria M. Lister | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div id="root" className="root">
            <div className="absolute inset-0 flex flex-col overflow-hidden">
              <div className="flex h-full flex-col items-center lg:pb-10">
                <Header className="sticky top-0 z-50 flex h-20 w-full max-w-screen-2xl items-center justify-between px-8 py-5" />
                <main className="w-full flex-1 overflow-y-auto">
                  <div className="mx-auto h-full max-w-7xl px-8 py-5">
                    {children}
                  </div>
                </main>
              </div>
              <Footer className="sticky bottom-0 z-50 hidden h-5 w-full items-center justify-end px-4 py-5 opacity-50 lg:flex" />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

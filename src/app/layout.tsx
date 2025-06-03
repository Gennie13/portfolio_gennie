// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Menu from "@/components/Menu";
import { Toaster } from "@/components/ui/sonner";
import ThemeProvider from "@/components/ThemeProvider"; 

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gennie",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.css"
        />
      </head>
      <body className="antialiased min-h-screen">
        <ThemeProvider>
          {children}
          <Menu />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

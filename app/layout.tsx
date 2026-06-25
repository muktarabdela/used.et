// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
// import { WakeLockProvider } from "@/components/WakeLockProvider";

const hanken = Hanken_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-hanken',
});

export const metadata: Metadata = {
  title: "Yagelege Market",
  description: "Buy and sell used products easily in your city.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#006a41",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Excellent for mobile web apps to prevent accidental double-tap zoom
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hanken.variable} light`}>
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      {/* Added min-h-screen flex flex-col to guarantee full mobile viewport expansion */}
      <body className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased selection:bg-primary/20">
        {/* <WakeLockProvider /> */}
        {children}

      </body>
    </html>
  );
}
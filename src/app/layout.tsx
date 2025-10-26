import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mumbai ka maal — Contemporary Mumbai Fashion House",
  description:
    "Mumbai ka maal is a premium fashion house celebrating Mumbai-inspired styles with curated collections for the modern wardrobe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${display.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

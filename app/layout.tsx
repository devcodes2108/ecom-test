import type { Metadata } from "next";
import { Inter, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/StoreContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const serifDisplay = Noto_Serif_Devanagari({
  subsets: ["devanagari", "latin"],
  variable: "--font-serif-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Femiknit | Indian Ethnic Wear for Every Generation",
  description:
    "Shop sarees, kurtis, kurtas, kids wear, and festive collections from Femiknit, a refined Indian ethnic wear storefront.",
  metadataBase: new URL("https://femiknit.example"),
  openGraph: {
    title: "Femiknit",
    description: "Production-ready Indian ethnic wear ecommerce storefront.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${inter.variable} ${serifDisplay.variable} font-sans antialiased`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}

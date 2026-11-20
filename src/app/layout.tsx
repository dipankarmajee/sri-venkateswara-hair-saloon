import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#07090C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Sri Venkateswara Hair Saloon | Premier Men's Grooming Studio, Hyderabad",
  description: "Bespoke hair styling, modern skin fades, traditional hot towel shaves, relaxing head spas, and luxury grooming in Gulmohar Park Colony, Serilingampally, Hyderabad. Fully air-conditioned.",
  keywords: [
    "Sri Venkateswara Hair Saloon",
    "Luxury barber shop Hyderabad",
    "Gulmohar Park Colony hair saloon",
    "Men grooming studio Serilingampally",
    "Best haircut Nallagandla",
    "Beard trimming Lingampally",
    "Hair spa Hyderabad"
  ],
  authors: [{ name: "Sri Venkateswara Hair Saloon" }],
  openGraph: {
    title: "Sri Venkateswara Hair Saloon | Premier Grooming Studio",
    description: "Experience the art of modern men's haircutting and traditional barbering in Gulmohar Park Colony, Hyderabad.",
    url: "https://sri-venkateswara-hair-saloon.com",
    siteName: "Sri Venkateswara Hair Saloon",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-dark-950 text-slate-100 min-h-screen flex flex-col selection:bg-gold selection:text-dark-950">
        {children}
      </body>
    </html>
  );
}

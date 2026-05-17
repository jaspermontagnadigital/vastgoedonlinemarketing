import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vastgoed Online Marketing | Meer klanten voor makelaars & vastgoedbedrijven",
  description:
    "Wij zorgen dat kopers, huurders en vastgoedeigenaren jou als eerste vinden online. Meer zichtbaarheid in Google, meer bereik op social media en meer klanten voor jouw vastgoedbedrijf in jouw regio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

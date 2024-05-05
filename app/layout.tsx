import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmplexserif = IBM_Plex_Serif({ subsets: ["latin"], weight: ['400', '700'], variable: '--font-ibmplexserif' });

export const metadata: Metadata = {
  title: "Horizon",
  description: "A perfect banking app for everyone.",
  icons: ['/icons/logo.svg']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmplexserif.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}

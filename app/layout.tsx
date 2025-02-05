import { Raleway } from "next/font/google";
import localFont from 'next/font/local'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACM Illinois Tech",
  description: "Website of Associate of Computing Machinery at Illinois Tech",
};

// The fonts
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

const breeSerif = localFont({
  src: '../fonts/BreeSerif-Regular.ttf',
  display: 'swap',
  variable: '--font-bree-serif',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${breeSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

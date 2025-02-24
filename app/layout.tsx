import { Raleway } from "next/font/google";
import localFont from 'next/font/local'
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "ACM Illinois Tech",
  icons: [
    { rel: "icon", url: "https://raw.githubusercontent.com/iitacm/iitacm1.github.io/refs/heads/main/app/favicon.ico" }
  ],
  description: "The Official Website of Associate of Computing Machinery at Illinois Tech",
  keywords: ["ACM", "IIT", "Illinois Tech", "Associate of Computing Machinery", "Illinois Institute of Technology", "ACM IIT", "ACM Illinois Tech", "ACM IIT Website", "ACM Illinois Tech Website"], 
  authors: [{ name: "ACM Illinois Tech", url: "https://acmilliniostech.org" }],
  openGraph: {
    title: "ACM Illinois Tech",
    description: "The Official Website of Associate of Computing Machinery at Illinois Tech",
    url: "https://acmillinoistech.org",
    siteName: "ACM Illinois Tech",
    images: [
      {
        url: "../public/assets/acm_iit_logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACM Illinois Tech",
    description: "The official Website of Associate of Computing Machinery at Illinois Tech",
    images: ["../public/assets/acm_iit_logo.png"],
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
    },
  }
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
        <Footer />
      </body>
    </html>
  );
}

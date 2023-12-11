import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KindKorner",
  description: "An online local market experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:image" content="/images/preview.jpg" />
      </head>
      <Script
        src={
          "https://www.googletagmanager.com/gtag/js?id=" +
          process.env.GOOGLE_ANALYTICS_ID
        }
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `,
        }}
      />

      <body className={inter.className}>{children}</body>
    </html>
  );
}

import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "PRGG 2025",
  description: "Pemetaan Potensi Desa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* CSS dari folder public, wajib pakai <link> */}
        <link rel="stylesheet" href="/landing/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/landing/css/style.css" />
        <link rel="stylesheet" href="/landing/lib/animate/animate.min.css" />
      </head>

      <body>
        <Script 
  src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"
  strategy="beforeInteractive"
/>
        {/* Bootstrap JS dari CDN */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />

        {/* WOW.js */}
        <Script src="/landing/lib/wow/wow.min.js" strategy="afterInteractive" />

        {/* Easing */}
        <Script src="/landing/lib/easing/easing.min.js" strategy="afterInteractive" />

        {/* Main Template JS */}
        <Script src="/landing/js/main.js" strategy="afterInteractive" />

        {children}
      </body>
    </html>
  );
}

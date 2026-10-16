import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import AmbientField from "@/components/AmbientField";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import TextHoverEffect from "@/components/TextHoverEffect";
import { asset, site } from "@/lib/config";
import "./globals.css";

// Google Fonts, downloaded at build time by next/font and served from this site:
// no third-party request (so no preconnect needed), font-display: swap, and
// metric-matched fallbacks so text doesn't shift when the fonts arrive.
// Fraunces is variable with the optical-size axis: big headings get the high-opsz cut.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  authors: [{ name: site.name }],
  icons: { icon: asset("favicon.svg") },
};

export const viewport: Viewport = {
  themeColor: "#111214",
  colorScheme: "dark",
};

// Runs before paint: marks JS as available and clears any legacy theme override so dark mode is strictly enforced.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');d.dataset.theme='dark';try{localStorage.removeItem('theme');}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <Script id="boot-theme" strategy="beforeInteractive">
          {bootScript}
        </Script>
      </head>
      <body>
        <AmbientField />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <section className="name-statement" aria-label="Nagavardhan">
          <TextHoverEffect text="NAGAVARDHAN" />
        </section>
        <RevealObserver />
        <BackToTop />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Nagavardhan Reddy Lella | Digital Marketing Executive & AI-Native Marketer",
  description:
    "Digital Marketing Executive who builds and ships full marketing systems — brands, websites, campaigns — using AI tools like Lovable, Antigravity, and ChatGPT as the execution layer.",
};

import NeuralThreading from "@/components/ui/NeuralThreading";
import BackToTop from "@/components/ui/BackToTop";
import { ThemeProvider } from "@/contexts/ThemeContext";

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body style={{ fontFamily: "var(--font-outfit), sans-serif" }} className="bg-bg-primary overflow-x-hidden">
        <ThemeProvider>
          <NeuralThreading />
          <BackToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

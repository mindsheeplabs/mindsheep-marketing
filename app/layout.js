import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://mindsheep.com.au"),
  title: {
    default: "Mindsheep Marketing | Humans helping humans with AI",
    template: "%s | Mindsheep Marketing",
  },
  description:
    "AI-powered marketing and development: Google Ads, social and UGC, content, AI SEO (GEO), websites and lead systems. All delivered faster and for less than a traditional agency — by people who talk to you like a person.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Mindsheep Marketing",
    title: "Mindsheep Marketing | Humans helping humans with AI",
    description:
      "AI runs on the inside. Humans talk to you on the outside. Marketing, development and lead systems rebuilt around AI.",
    url: "https://mindsheep.com.au",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* We apply the Inter className directly to the body to ensure it becomes the default font, 
          while injecting both fonts as CSS variables for custom usage in globals.css */}
      <body className={`${inter.className} ${inter.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}

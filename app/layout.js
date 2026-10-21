import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import Sky from "./components/Sky";
import BookDialog from "./components/BookDialog";

// Two families, as on mindsheeplabs.com: Outfit 600 for display, Geist for
// everything you read. Both are variable fonts, so no weight list is needed.
// The variables feed --sc-font-display and --sc-font-text in globals.css.
const outfit = Outfit({
  variable: "--sc-font-display",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--sc-font-text",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "Mindsheep Marketing Australia | We put AI to work in your marketing.";
const DESCRIPTION =
  "We put AI to work in your marketing, so the same budget buys you more. Smarter AI Google Ads, AI search and visibility, and AI design and websites. Perth based, working with businesses across Australia.";

export const metadata = {
  metadataBase: new URL("https://mindsheep.com.au"),
  title: {
    default: TITLE,
    template: "%s | Mindsheep Marketing Australia",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Mindsheep Marketing Australia",
    locale: "en_AU",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://mindsheep.com.au",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body className={`${outfit.variable} ${geist.variable}`}>
        <Sky />
        {children}
        <BookDialog />
      </body>
    </html>
  );
}

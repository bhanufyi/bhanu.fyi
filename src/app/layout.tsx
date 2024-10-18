import "./global.css";

import { type Metadata, type Viewport } from "next";
import NextTopLoader from "nextjs-toploader";

import { SITE_DESCRIPTION, SITE_TITLE_APPEND, SITE_URL } from "@/config";
import {
  inter_font,
  iosevka_font,
  eb_garamond_font,
} from "@/lib/domains/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`scroll-pt-16 scroll-smooth ${inter_font.variable} ${iosevka_font.variable} ${eb_garamond_font.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-secondary selection:text-background">
        <script
          dangerouslySetInnerHTML={{
            __html: blockingScriptSetInitialColorScheme,
          }}
        ></script>
        <NextTopLoader showSpinner={false} color={"#c1740c"} />
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `Hello hello! ${SITE_TITLE_APPEND}`,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `👋 Hello! ${SITE_TITLE_APPEND}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/bhanu.jpeg`,
        width: 1200,
        height: 630,
        alt: "Bhanu's website",
      },
    ],
  },
  twitter: {
    title: `👋 Hello! ${SITE_TITLE_APPEND}`,
    description: SITE_DESCRIPTION,
    card: "summary_large_image",
    creator: "@bhanufyi",
    site: "@bhanufyi",
    images: [
      {
        url: `${SITE_URL}/bhanu.jpeg`,
        width: 1200,
        height: 630,
        alt: "Bhanu's website",
      },
    ],
  },
  appleWebApp: {
    title: "Bhanu's website",
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: "/favicon.png",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#C1A207" },
    { media: "(prefers-color-scheme: dark)", color: "#C1740C" },
  ],
};

const blockingScriptSetInitialColorScheme = `(function() {
	function setInitialColorScheme() {
		function getInitialColorScheme() {
			const persistedColorScheme = window.localStorage.getItem("color-scheme");
			const hasPersistedColorScheme = typeof persistedColorScheme === "string";

			/**
			 * If the user has explicitly chosen light or dark, use it
			 */
			if (hasPersistedColorScheme) {
				const root = window.document.documentElement;
				root.style.setProperty("--initial-color-scheme", persistedColorScheme);

				if (persistedColorScheme !== "system") {
					return persistedColorScheme;
				}
			}

			/**
			 * If they haven't been explicit, check the media query
			 */
			const mql = window.matchMedia("(prefers-color-scheme: dark)");
			const hasSystemColorSchemePreference = typeof mql.matches === "boolean";

			if (hasSystemColorSchemePreference) {
				return mql.matches ? "dark" : "light";
			}

			/**
			 * If they are using a browser/OS that doesn't support
			 * color themes, default to 'light'.
			 */
			return "light";
		}

		const colorScheme = getInitialColorScheme();
		if (colorScheme === "dark") {
			document.documentElement.setAttribute("data-color-scheme", "dark");
		}
	}
	setInitialColorScheme();
})()

// IIFE!`;

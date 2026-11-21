import type { Metadata, Viewport } from "next";
import { preload } from "react-dom";
import "./fonts.css";
import "./site.css";
import { profile } from "@/data/profile";
import { siteUrl, isIndexable } from "@/lib/config";

const title = `${profile.name} · ${profile.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s · ${profile.name}` },
  description: profile.seo.description,
  keywords: profile.seo.keywords,
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title,
    description: profile.seo.description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description: profile.seo.description },
  formatDetection: { telephone: false },

  robots: isIndexable ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#f4f0e4", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  for (const f of ["fraunces-latin-wght-normal", "inter-latin-wght-normal"]) {
    preload(`/fonts/${f}.woff2`, { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js");' }} />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

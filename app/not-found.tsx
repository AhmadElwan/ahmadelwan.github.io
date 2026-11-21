import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <main className="s-err" id="main">
      <p className="s-err-code">404</p>
      <h1>This page isn&apos;t here.</h1>
      <p>The link may be old or mistyped. The whole portfolio is on one page.</p>
      <Link className="s-btn s-btn-red" href="/">Back to the homepage <span aria-hidden="true">→</span></Link>
    </main>
  );
}

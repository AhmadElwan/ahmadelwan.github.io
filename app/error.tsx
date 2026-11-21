"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="s-err" id="main">
      <p className="s-err-code">Oops</p>
      <h1>Something went wrong.</h1>
      <p>Please try again. If it keeps happening, email me and I will fix it.</p>
      <button className="s-btn s-btn-red" type="button" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}

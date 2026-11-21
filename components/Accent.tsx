import { Fragment } from "react";

/** Renders "plain *accent* plain" with the accent phrase wrapped in <em>. */
export function Accent({ text }: { text: string }) {
  const parts = text.split(/\*(.+?)\*/g);
  return (
    <>
      {parts.map((p, i) => (i % 2 === 1 ? <em key={i}>{p}</em> : <Fragment key={i}>{p}</Fragment>))}
    </>
  );
}

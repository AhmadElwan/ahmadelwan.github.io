import { Fragment } from "react";

export function Accent({ text }: { text: string }) {
  const parts = text.split(/\*(.+?)\*/g);
  return <>{parts.map((p, i) => (i % 2 === 1 ? <em key={i}>{p}</em> : <Fragment key={i}>{p}</Fragment>))}</>;
}

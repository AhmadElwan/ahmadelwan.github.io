import type { ReactElement } from "react";

const W = 400;
const H = 250;

const bg = (cls: string) => <rect className={cls} width={W} height={H} />;

const covers: ReactElement[] = [
  <>
    {bg("p")}
    <rect className="w si3" x="44" y="26" width="312" height="200" />
    <path className="si3" d="M44 58H356" fill="none" />
    <circle className="r" cx="62" cy="42" r="5" />
    <circle className="i" cx="78" cy="42" r="5" />
    <circle className="i" cx="94" cy="42" r="5" />
    <rect className="r" x="60" y="74" width="170" height="76" />
    <rect className="i" x="60" y="162" width="110" height="8" />
    <rect className="i" x="60" y="178" width="150" height="8" />
    <rect className="i" x="60" y="194" width="90" height="8" />
    <rect className="i" x="246" y="74" width="94" height="40" />
    <rect className="w si3" x="246" y="126" width="94" height="40" />
    <rect className="i" x="246" y="178" width="94" height="24" />
  </>,

  <>
    {bg("i")}
    {[0, 1, 2].flatMap((r) =>
      [0, 1, 2].map((c) => {
        const x = 110 + c * 64;
        const y = 35 + r * 64;
        const k = r * 3 + c;
        return (
          <g key={k}>
            <rect className="sp3" x={x} y={y} width="52" height="52" fill="none" />
            {k % 4 === 0 && <circle className="r" cx={x + 26} cy={y + 26} r="16" />}
            {(k === 2 || k === 6) && (
              <path
                className="sp3"
                d={`M${x + 12} ${y + 12}L${x + 40} ${y + 40}M${x + 40} ${y + 12}L${x + 12} ${y + 40}`}
                fill="none"
              />
            )}
          </g>
        );
      }),
    )}
  </>,

  <>
    {bg("p")}
    {Array.from({ length: 11 }, (_, i) => (
      <rect key={i} className="i fade" x="40" y={22 + i * 20} width={i % 3 === 2 ? 220 : 320} height="8" />
    ))}
    <rect className="r si3" x="100" y="62" width="200" height="140" />
    <rect className="w" x="124" y="88" width="152" height="24" />
    <rect className="w" x="124" y="124" width="152" height="24" />
    <rect className="i" x="124" y="162" width="152" height="26" />
  </>,

  <>
    {bg("r")}
    <rect className="w si3" x="60" y="34" width="280" height="182" />
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect className="i" x="84" y={62 + i * 44} width="110" height="8" />
        <rect className={i === 1 ? "w si3" : "i"} x="250" y={52 + i * 44} width="64" height="28" rx="14" />
        <circle className={i === 1 ? "i" : "w"} cx={i === 1 ? 264 : 300} cy={66 + i * 44} r="10" />
      </g>
    ))}
  </>,

  <>
    {bg("p")}
    {[60, 125, 190].map((y, i) => (
      <g key={y}>
        <path className="si3" d={`M82 ${y}L170 125`} fill="none" />
        <circle className={i === 1 ? "r" : "i"} cx="64" cy={y} r="20" />
      </g>
    ))}
    <path className="si3" d="M200 125H282" fill="none" />
    <circle className="r" cx="186" cy="125" r="26" />
    <rect className="w si3" x="282" y="92" width="96" height="66" />
    <path className="si3" d="M282 92L330 130L378 92" fill="none" />
  </>,

  <>
    {bg("p")}
    <rect className="w si3" x="40" y="34" width="224" height="182" />
    <rect className="i" x="40" y="34" width="224" height="34" />
    {Array.from({ length: 28 }, (_, i) => {
      const c = i % 7;
      const r = Math.floor(i / 7);
      const on = [3, 9, 10, 16, 22].includes(i);
      return (
        <circle key={i} className={on ? "r" : "i fade2"} cx={62 + c * 30} cy={92 + r * 30} r={on ? 9 : 4} />
      );
    })}
    <circle className="w si3" cx="328" cy="150" r="46" />
    <path className="si3" d="M328 150V122M328 150L348 162" fill="none" strokeLinecap="square" />
    <circle className="r" cx="328" cy="150" r="5" />
  </>,

  <>
    {bg("i")}
    <polygon className="p" points="50,34 350,34 322,74 78,74" />
    <polygon className="p op" points="86,82 314,82 288,122 112,122" />
    <polygon className="p op2" points="116,130 284,130 262,170 138,170" />
    <polygon className="r" points="144,178 256,178 240,218 160,218" />
  </>,

  <>
    {bg("r")}
    <rect className="w si3" x="50" y="34" width="300" height="42" rx="21" />
    <circle className="si3" cx="86" cy="55" r="9" fill="none" />
    <path className="si3" d="M93 62L102 71" fill="none" strokeLinecap="square" />
    <rect className="i" x="120" y="51" width="130" height="8" />
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect className={i === 0 ? "i" : "w si3"} x="50" y={96 + i * 46} width="300" height="38" />
        <circle className={i === 0 ? "r" : "i"} cx="74" cy={115 + i * 46} r="8" />
        <rect
          className={i === 0 ? "p" : "i"}
          x="96"
          y={108 + i * 46}
          width={i === 0 ? 170 : 120}
          height="7"
        />
        <rect className={i === 0 ? "p op" : "i fade"} x="96" y={121 + i * 46} width="80" height="6" />
      </g>
    ))}
  </>,
];

export function Cover({ index }: { index: number }) {
  return (
    <svg
      className="s-cover"
      viewBox={`0 0 ${W} ${H}`}
      role="presentation"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {covers[index % covers.length]}
    </svg>
  );
}

import { profile } from "@/data/profile";
import { BranchParts } from "./Branch";

const RING = "SOFTWARE ENGINEER · NEXT.JS · PYTHON · SEO · HUBSPOT · WORDPRESS · ";

/** Geometric hero graphic: red disc, ink quarter-circle, rotating text ring and the AE mark. No data, just shapes. */
export function HeroArt() {
  return (
    <div className="s-art" aria-hidden="true">
      <svg viewBox="0 0 500 500" role="presentation">
        <g className="grid" strokeWidth="1">
          {Array.from({ length: 7 }, (_, i) => (
            <path key={i} d={`M${(i + 1) * 62.5} 0V500M0 ${(i + 1) * 62.5}H500`} />
          ))}
        </g>
        <path className="ink" d="M0 500V300A200 200 0 0 1 200 500Z" />
        <circle className="red" cx="250" cy="250" r="168" />
        <circle className="ring-bg" cx="250" cy="250" r="226" />
        <defs>
          <path id="ring" d="M250 250m-212 0a212 212 0 1 1 424 0a212 212 0 1 1-424 0" />
        </defs>
        <g className="ring">
          <text>
            <textPath href="#ring" textLength="1318" lengthAdjust="spacing">
              {RING.repeat(2)}
            </textPath>
          </text>
        </g>
        <g className="art-branch" transform="translate(528 2) rotate(-44) scale(-.2 .2) translate(0 -3)">
          <BranchParts />
        </g>
        {!profile.photo && (
          <text className="mono-mark" x="250" y="286" textAnchor="middle">
            AE
          </text>
        )}
      </svg>
      {profile.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="s-photo" src={profile.photo} alt="" width={340} height={340} />
      ) : null}
      <p className="s-art-cap">
        Amman, JO <span>31.95°N 35.93°E</span>
      </p>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

const fmt = () =>
  new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Amman" }).format(new Date());

/** Live Amman time. Renders a placeholder on the server, then fills in after hydration. */
export function Clock() {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const tick = () => setTime(fmt());
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);
  return <span id="clock" aria-label="Local time in Amman">{time}</span>;
}

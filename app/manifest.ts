import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} · ${profile.title}`,
    short_name: profile.name,
    description: profile.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f4f0e4",
    theme_color: "#f4f0e4",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}

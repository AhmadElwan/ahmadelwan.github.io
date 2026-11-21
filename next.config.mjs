/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is fully static, so it is exported as plain files (works on GitHub Pages and any static host).
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  trailingSlash: false,
};

export default nextConfig;

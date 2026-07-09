import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is a single page now — keep old URLs working as deep links.
  async redirects() {
    return [
      { source: "/projects", destination: "/#projects", permanent: false },
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
    ];
  },
};

export default nextConfig;

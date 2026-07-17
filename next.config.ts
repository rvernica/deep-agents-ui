import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hosts allowed to reach the dev server, e.g. when it's fronted by a
  // reverse proxy on a custom domain. Set ALLOWED_DEV_ORIGINS to a
  // comma-separated list (e.g. "agents.paradigm4.sh"). Unset = no extra origins.
  allowedDevOrigins: process.env.ALLOWED_DEV_ORIGINS
    ?.split(",")
    .map((s) => s.trim())
    .filter(Boolean),
};

export default nextConfig;

import { execFileSync } from "node:child_process";
import { resolve } from "node:path";
import type { NextConfig } from "next";

// Cloudflare's static Next preset runs `npx next build`, which skips npm's prebuild hook.
// Generate responsive photo variants before Next resolves StaticPhoto's manifest import.
const projectRoot = process.cwd();
execFileSync(process.execPath, [resolve(projectRoot, "scripts/build-photos.mjs")], {
  cwd: projectRoot,
  stdio: "inherit",
});

const nextConfig: NextConfig = {
  agentRules: false,
  output: "export",
};

export default nextConfig;

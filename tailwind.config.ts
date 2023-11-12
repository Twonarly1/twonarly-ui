import hawkPreset from "./src/lib/plugin/hawk.preset";

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  presets: [hawkPreset],
};
export default config;

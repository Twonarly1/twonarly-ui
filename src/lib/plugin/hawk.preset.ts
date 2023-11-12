import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

import hawkPlugin from "./hawkPlugin";

import type { Config } from "tailwindcss";
// import { parkwindPlugin } from "@park-ui/tailwind-plugin";

const finnegansPreset: Config = {
  darkMode: "class",
  content: [],
  plugins: [animate, hawkPlugin, typography],
};

export default finnegansPreset;

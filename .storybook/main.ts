import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import type { StorybookConfig } from "@storybook/react-vite";
import type { UserConfig as ViteConfig } from "vite";

const config: StorybookConfig = {
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  framework: "@storybook/react-vite",
  stories: [
    // NB: intentional pattern duplication (with capture group below) to ensure introduction page is loaded first
    "../src/stories/introduction.stories.mdx",
    "../src/**/*.stories.@(ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
  ],
  staticDirs: [
    "../public",
    // copy static CSS into static Storybook build
    // NB: this is a hack to get custom styles (e.g. custom fonts) rendering in the Storybook manager UI. This *does* duplicate some static CSS already in the build, but is a convenient workaround
    { from: "../src/lib/styles", to: "styles" },
  ],
  docs: {
    autodocs: true,
  },
  viteFinal: (config) =>
    // recursively merge Vite options
    mergeConfig(config, {
      // https://github.com/storybookjs/storybook/issues/18920#issuecomment-1342865124
      define: { "process.env": {} },
      plugins: [tsconfigPaths()],
      // dependencies to pre-optimize
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
      logLevel: "error",
    } as ViteConfig),
};
export default config;

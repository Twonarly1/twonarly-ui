// import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

import { colors, semanticTokens } from ".";
import { generateColorTokens } from "../util";

const hawkPlugin = plugin(
  ({ addBase }) => {
    addBase({
      ":root": semanticTokens.light,
      ".dark": semanticTokens.dark,
    });
  },
  {
    theme: {
      extend: {
        borderColor: generateColorTokens("border"),
        backgroundColor: generateColorTokens("bg"),
        textColor: generateColorTokens("fg"),
        colors: {
          primary: { ...colors.primary, DEFAULT: colors.primary[500] },
        },

        // zIndex: {
        //   backdrop: "50",
        //   dialog: "100",
        //   menu: "110",
        //   header: "40",
        // },
        // fontFamily: {
        //   sans: ["var(--font-sans)", ...fontFamily.],
        // },
      },
    },
  }
);

export default hawkPlugin;

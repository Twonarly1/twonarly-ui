import { default as tailwind_colors } from "tailwindcss/colors";

import type { DefaultColors } from "tailwindcss/types/generated/colors";

type colorKey =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "950";

export interface Colors {
  transparent: string;
  black: string;
  white: string;
  primary: Record<colorKey, string>;
  neutral: DefaultColors["neutral"];
}

const colors: Colors = {
  transparent: "transparent",
  black: "#000000",
  white: "#FFFFFF",
  primary: tailwind_colors.pink,
  neutral: tailwind_colors.neutral,
};

export default colors;

import { style } from "@vanilla-extract/css";

import { globalThemeVars } from "./global.css";

export const app = style({
  padding: "0 1rem",
});

export const title = style({
  fontFamily: globalThemeVars.fonts.heading,
  fontSize: globalThemeVars.fontSizes.heading1,
});

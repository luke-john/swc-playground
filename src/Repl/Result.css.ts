import { style } from "@vanilla-extract/css";

import { globalThemeVars, mediaQuery } from "../global.css";

export const output = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

export const label = style({
  fontFamily: globalThemeVars.fonts.body,
  fontSize: globalThemeVars.fontSizes.copy,
  fontWeight: 400,
});

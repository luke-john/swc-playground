import { style, globalStyle } from "@vanilla-extract/css";

import { globalThemeVars, mediaQuery } from "../global.css";

export const input = style({
  // flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

globalStyle(`${input} > :not(:first-child)`, {
  marginTop: globalThemeVars.space.xlarge,
});

export const label = style({
  fontFamily: globalThemeVars.fonts.body,
  fontSize: globalThemeVars.fontSizes.copy,
});

export const select = style({
  fontFamily: globalThemeVars.fonts.body,
  fontSize: globalThemeVars.fontSizes.copy,
});

export const textarea = style({
  fontFamily: globalThemeVars.fonts.body,
  fontSize: globalThemeVars.fontSizes.copy,
  marginTop: globalThemeVars.space.medium,
  padding: globalThemeVars.space.small,
});

export const inputCode = style({
  // flex: 1,
  display: "flex",
  flexDirection: "column",
});

export const inputCompilation = style({
  display: "flex",
  flexDirection: "row-reverse",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const compileRun = style({
  fontFamily: globalThemeVars.fonts.body,
  fontSize: globalThemeVars.fontSizes.copy,
  padding: `${globalThemeVars.space.small} ${globalThemeVars.space.medium}`,
  marginRight: globalThemeVars.space.medium,
});

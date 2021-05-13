import { globalStyle, style } from "@vanilla-extract/css";

import { globalThemeVars, mediaQuery } from "./global.css";

export const app = style({
  height: "100%",
  padding: "0 1rem",
  display: "grid",
  gridTemplateColumns: "100%",
  gridAutoFlow: "row",
  "@media": {
    [mediaQuery.desktop]: {
      gridTemplateRows: "fit-content(40%) 1fr fit-content(30%)",
      gridTemplateColumns: "100%",
      gridAutoFlow: "column",
    },
  },
});

globalStyle(`${app} > *`, {
  "@media": {
    [mediaQuery.desktop]: {
      overflow: "scroll",
    },
  },
});

export const header = style({
  paddingTop: globalThemeVars.space.large,
});

export const title = style({
  fontFamily: globalThemeVars.fonts.heading,
  fontSize: globalThemeVars.fontSizes.heading1,
  margin: 0,
});

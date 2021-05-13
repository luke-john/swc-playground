import { style, globalStyle } from "@vanilla-extract/css";

import { globalThemeVars, mediaQuery } from "../global.css";

export const repl = style({
  display: "grid",
  gridTemplateColumns: "100%",
  gridAutoFlow: "row",
  columnGap: globalThemeVars.space.large,
  "@media": {
    [mediaQuery.desktop]: {
      gridTemplateColumns: "50% 50%",
      gridAutoFlow: "column",
      overflow: "scroll",
    },
  },
});

export const replHeading1 = style({
  fontFamily: globalThemeVars.fonts.heading,
  fontSize: globalThemeVars.fontSizes.heading2,
  fontWeight: 500,
});

export const compileRun = style({
  fontFamily: globalThemeVars.fonts.body,
  fontSize: globalThemeVars.fontSizes.copy,
  padding: `${globalThemeVars.space.small} ${globalThemeVars.space.medium}`,
  marginRight: globalThemeVars.space.medium,
});

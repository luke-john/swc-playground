import { style, globalStyle } from "@vanilla-extract/css";

import { globalThemeVars } from "./global.css";

export const footer = style({
  marginTop: globalThemeVars.space.xlarge,
  borderTop: `1px solid ${globalThemeVars.color.sectionBorder}`,
  paddingBottom: globalThemeVars.space.large,
});

export const linksHeading1 = style({
  fontFamily: globalThemeVars.fonts.heading,
  fontSize: globalThemeVars.fontSizes.heading3,
  fontWeight: 500,
});

export const linkList = style({
  listStyle: "none",
  margin: 0,
  marginBlock: 0,
  padding: 0,
});

globalStyle(`${linkList} > li`, {
  display: "inline",
  marginRight: "1rem",
});

export const link = style({
  fontFamily: globalThemeVars.fonts.body,
  fontSize: globalThemeVars.fontSizes.lowPriorityCopy,
  fontWeight: 400,
});

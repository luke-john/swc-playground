import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const breakpoints = {
  mobile: 0,
  desktop: 1080,
};

export type Breakpoint = keyof typeof breakpoints;

export const mediaQuery = {
  desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
};

export const globalThemeVars = createGlobalTheme(":root", {
  color: {
    yellow: "#f2e326",
    coral: "#ffa587",
  },
  space: {
    small: "0.25rem",
    medium: "0.5rem",
    large: "0.75rem",
    xlarge: "1rem",
  },
  fontSizes: {
    heading1: "24px",
    heading2: "20px",
    copy: "16px",
  },
  fonts: {
    heading:
      '"DM Sans", "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    code: 'MonoLisa, "Roboto Mono", Menlo, monospace',
  },
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
});

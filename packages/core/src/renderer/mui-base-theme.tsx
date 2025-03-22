/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import React from "react";
import type { Theme} from "@mui/material";
import { createTheme, ThemeProvider, StyledEngineProvider, adaptV4Theme } from "@mui/material";


declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export const defaultMuiBaseTheme = createTheme(adaptV4Theme({
  props: {
    MuiIconButton: {
      color: "inherit",
    },
    MuiSvgIcon: {
      fontSize: "inherit",
    },
    MuiTooltip: {
      placement: "top",
    },
  },
  overrides: {
    MuiIconButton: {
      root: {
        "&:hover": {
          color: "var(--iconActiveColor)",
          backgroundColor: "var(--iconActiveBackground)",
        },
      },
    },
  },
}));

export function DefaultProps(App: React.ComponentType | React.FunctionComponent) {
  return (
    <StyledEngineProvider injectFirst>
      (
      <ThemeProvider theme= { defaultMuiBaseTheme } >
        <App />
      </ThemeProvider>
      )
    </StyledEngineProvider>
  );
}

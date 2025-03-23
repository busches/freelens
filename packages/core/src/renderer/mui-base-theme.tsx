/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import React from "react";
import type { Theme} from "@mui/material";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export const defaultMuiBaseTheme = createTheme({
  components: {
    MuiIconButton: {
      defaultProps: {
        color: "inherit",
      },
      styleOverrides: {
        root: {
          "&:hover": {
            color: "var(--iconActiveColor)",
            backgroundColor: "var(--iconActiveBackground)",
          },
        }
      }
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: "inherit",
      }
    },
    MuiTooltip: {
      defaultProps: {
        placement: "top",
      }
    },
  },
});

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

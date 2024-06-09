"use client";

import { PaletteMode, createTheme } from "@mui/material";

export interface Theme {
  palette: {
    mode: PaletteMode;
  };
}

export const lightThem = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: () => ({
          fontSize: "0.6rem",
        }),
        icon: {
          fontSize: "0.7rem",
        },
        colorWarning: () => ({
          backgroundColor: "gold",
          color: "black",
        }),
      },
    },
  },
});

export const darkThem = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: () => ({
          fontSize: "0.6rem",
        }),
        icon: {
          fontSize: "0.7rem",
        },
      },
    },
  },
});

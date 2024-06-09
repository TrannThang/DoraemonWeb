"use client";

import { Theme, darkThem, lightThem } from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import { createContext, useEffect, useMemo, useState } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const CustomThemeProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [theme, setTheme] = useState<Theme>(darkThem);
  const [mode, setMode] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const themeLocalStorage = localStorage.getItem("theme");
      return themeLocalStorage === "dark" ? "dark" : "light";
    }
    return "light";
  });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", mode);
      setTheme(mode === "light" ? lightThem : darkThem);
    }
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

"use client";

import { ColorModeContext } from "@/theme/theme-context-provider";
import { ModeNight, WbSunny } from "@mui/icons-material";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export default function Header() {
  const [firstRender, setFirstRender] = useState(true);
  const [mode, setMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const themeLocalStorage = localStorage.getItem("theme");
      return themeLocalStorage !== "dark";
    }
    return true;
  });
  const colorMode = useContext(ColorModeContext);
  const onChangeMode = () => {
    setMode((prevMode) => !prevMode);
    colorMode.toggleColorMode();
  };
  useEffect(() => {
    setFirstRender(false);
  }, [firstRender]);
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar variant="regular" sx={{ width: "100%" }} disableGutters>
          <Box>
            <Image
              priority
              src="/avatar-doraemon.png"
              height={50}
              width={50}
              alt="Avatar"
            />
          </Box>
          <Typography
            component="a"
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: 800,
              fontSize: "2rem",
              color: "white",
              letterSpacing: ".3rem",
            }}
          >
            Doraemon
          </Typography>
          {!firstRender && (
            <Typography align="right" sx={{ flexGrow: 1, cursor: "pointer" }}>
              {mode && (
                <WbSunny
                  onClick={onChangeMode}
                  fontSize="large"
                  htmlColor="#eaea6c"
                />
              )}
              {!mode && <ModeNight onClick={onChangeMode} fontSize="large" />}
            </Typography>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

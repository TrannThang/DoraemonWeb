import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import * as React from "react";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <AppBar
      position="static"
      color="primary"
      style={{ bottom: 0, zIndex: 1000 }}
    >
      <Toolbar variant="regular" sx={{ width: "100%" }}>
        <Container maxWidth="md">
          <Typography variant="body1" color="inherit">
            &copy; {new Date().getFullYear()} Doraemon App
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

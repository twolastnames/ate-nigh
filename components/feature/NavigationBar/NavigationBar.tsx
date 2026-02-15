"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

export function NavigationBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ate Nigh
        </Typography>

        <Button color="inherit" component={Link} href="/eat">
          Eat
        </Button>
        <Button color="inherit" component={Link} href="/days">
          Days
        </Button>
      </Toolbar>
    </AppBar>
  );
}

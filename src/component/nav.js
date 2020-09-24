import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Image from "../image/logo.png";

export default function DenseAppBar() {
  return (
    <AppBar
      position="static"
      style={{
        background: "#F5F9F9",
        boxShadow: "initial",
      }}
    >
      <Toolbar variant="dense">
        <img src={Image} alt="logo" style={{ height: "50px" }} />
        <Typography variant="h6" color="secondary">
          Youtube Tag Generator
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

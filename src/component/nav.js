import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Image from "../image/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

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

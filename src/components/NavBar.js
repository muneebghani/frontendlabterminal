import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  navbar: {
    backgroundColor: "rgb(0,0,0)",
    alignItems: "center",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.navbar}>
        <Toolbar>
          <Typography variant="p" style={{ marginRight: "25px" }}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </Typography>
          <Typography variant="p" style={{ marginRight: "25px" }}>
            <Link to="/typography" className={classes.link}>
              Typography
            </Link>
          </Typography>
          <Typography variant="p" style={{ marginRight: "25px" }}>
            <Link to="/contactus" className={classes.link}>
              Contact
            </Link>
          </Typography>
          <Typography variant="p">
            <Link to="/myaccount" className={classes.link}>
              My Account
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;

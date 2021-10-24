// npm install @material-ui/core
import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "space-between", //horizontal spacing
  },
  logo: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center", //vertical spacing
  },
  links: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: theme.spacing(48),
  },
  link: {
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
      cursor: "pointer",
      padding: theme.spacing(1),
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 20,
    },
  },
}));

const MainNavigation = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <div className={classes.logo}>
          <Typography>Website Company</Typography>
        </div>
        <div className={classes.links}>
          <Typography className={classes.link}>Home</Typography>
          <Typography className={classes.link}>Courses</Typography>
          <Typography className={classes.link}>Connect</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavigation;

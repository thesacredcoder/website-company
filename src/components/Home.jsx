import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

import AppButton from "../utils/AppButton";
import llama from "../assets/llama-removebg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    height: "90vh",
  },
  accent: {
    color: theme.palette.accent.main,
  },
  heroText: {
    width: theme.spacing(40),
    fontWeight: "400",
  },
  pitch: {
    width: theme.spacing(40),
    fontWeight: "400",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
  },
  call: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginLeft: 12,
    borderRadius: 0,
    fontWeight: "400",
  },
  image: {
    height: 620,
    width: 620,
    zIndex: 2,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" className={classes.root}>
      {/* small se aage */}
      <Grid item sm={7} className={classes.container}>
        <Typography variant="h2" component="h5" className={classes.heroText}>
          Building Websites is now{" "}
          <span className={classes.accent}>Easier</span>
        </Typography>
        <Typography variant="h5" className={classes.pitch}>
          Have you ever wondered, why after so many people learning{" "}
          <span className={classes.accent}>web-development</span> and yet so
          many <span className={classes.accent}>fail to be one</span>
        </Typography>

        {/* CTA */}

        <div className={classes.call}>
          <Typography variant="h5">
            <span className={classes.accent}>Wonder</span> how{" "}
            <span className={classes.accent}>you can be</span> better?
          </Typography>
          <AppButton className={classes.button}>Contact Us</AppButton>
        </div>
      </Grid>
      <img src={llama} alt="llama" className={classes.image} />
    </Grid>
  );
};

export default Home;

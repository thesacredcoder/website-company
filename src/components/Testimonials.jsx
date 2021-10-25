import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import Marquee from "react-fast-marquee";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
  },
  accent: {
    color: theme.palette.accent.main,
  },
  headingContainer: {
    padding: theme.spacing(8),
  },
  marqueeContainer: {
    overflowY: "hidden",
  },
  marqueeText: {
    fontWeight: "400",
    letterSpacing: 3,
    fontSize: 280,
  },
  salesPitch: {
    backgroundColor: theme.palette.primary.main,
    height: "70vh",
  },
  salesTextContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  salesText: {
    fontWeight: "400",
  },
}));

function Testimonials(props) {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item sm={12} className={classes.headingContainer}>
          <Typography variant="h2" align="center" style={{ fontWeight: "400" }}>
            Testimonials.
          </Typography>
        </Grid>
        <Grid sm={12}>
          <Marquee
            speed={120}
            gradient={false}
            className={classes.marqueeContainer}
          >
            <Typography variant="h1" className={classes.marqueeText}>
              Success
            </Typography>
          </Marquee>
          <Marquee
            speed={60}
            gradient={false}
            className={classes.marqueeContainer}
          >
            <Typography
              variant="h1"
              align="right"
              className={classes.marqueeText}
            >
              Stories
            </Typography>
          </Marquee>
        </Grid>
      </Grid>
      <Grid container className={classes.salesPitch}>
        <Grid item sm={12} className={classes.salesTextContainer}>
          <Typography variant="h4" className={classes.salesText}>
            Do you <span className={classes.accent}>feel</span> like web
            development is <span className={classes.accent}>not for you?</span>
          </Typography>
          <Typography variant="h3" className={classes.salesText}>
            We beg to <span className={classes.accent}>differ</span>. We can{" "}
            <span className={classes.accent}>prove</span> too!
          </Typography>
          <Button variant="contained" color="secondary">
            Explore Now
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Testimonials;
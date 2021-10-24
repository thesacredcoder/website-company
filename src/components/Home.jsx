import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  heroText: {
    width: theme.spacing(40),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" className={classes.root}>
      {/* small se aage */}
      <Grid item sm={8}>
        <Typography variant="h2" component="h5" className={classes.heroText}>
          Building Websites is now{" "}
          <span style={{ color: "#EE726F" }}>Easier</span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;

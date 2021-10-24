import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  accent: { color: theme.palette.accent.main },
}));

function Important({ text, variant }) {
  const classes = useStyles();
  return (
    <Typography className={classes.accent} variant={variant}>
      {text}
    </Typography>
  );
}

export default Important;

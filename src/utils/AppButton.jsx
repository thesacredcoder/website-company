import React from "react";
import { Button } from "@material-ui/core";

function AppButton(props) {
  return (
    <Button
      variant="contained"
      color="secondary"
      disableElevation
      className={props.className} // props.className -> it will recieve something of name className from where it is used
    >
      {props.children}
    </Button>
  );
}

export default AppButton;

// <AppButton>content</AppButton>

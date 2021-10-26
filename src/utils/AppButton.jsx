import React from "react";
import { Button } from "@material-ui/core";

function AppButton({ endIcon, children, className }) {
  return (
    <Button
      variant="contained"
      color="secondary"
      className={className}
      endIcon={endIcon}
      disableElevation
    >
      {children}
    </Button>
  );
}

export default AppButton;

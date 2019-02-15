import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  plate: {
    margin: "80px 16px 16px 16px",
    display: "flex",
    flexDirection: "column",
    width: "100%"
  }
};

const Plate = props => {
  return <div style={styles.plate}>{props.child}</div>;
};
export default Plate;

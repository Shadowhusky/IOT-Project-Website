import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

// core components
import { infoColor, title } from "assets/jss/nextjs-material-kit.js";

const useStyles = makeStyles({
  progress: {
    width: "5rem !important",
    height: "0.8rem !important",
  },
  wrapperDiv: {
    margin: "100px auto",
    padding: "0px",
    maxWidth: "360px",
    textAlign: "center",
    position: "relative",
    zIndex: "9999",
    top: "0",
    opacity: "0.5"
  },
  iconWrapper: {
    display: "block"
  },
  title: {
    ...title,
    color: "#FFFFFF"
  }
});

export default function PageChange(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.wrapperDiv}>
        <div className={classes.iconWrapper}>
          <LinearProgress className={classes.progress} />
        </div>
        <h4 className={classes.title}>
          Traveling...
        </h4>
      </div>
    </div>
  );
}

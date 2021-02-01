// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/videoStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection(props) {
  const { ...rest } = props;
  const classes = useStyles();

  return (
    <div className={classes.section + " " + rest.className}>
      <iframe
        width="750"
        height="480"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className={classes.video}
      ></iframe>
    </div>
  );
}

/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

import useSmoothScroll from "react-smooth-scroll-hook";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const { scrollItems, scrollingBody } = props;
  const classes = useStyles();
  const scrollTo = (element) => {
    const target = document.getElementsByClassName(element)[0];
    window.scrollTo({
      top:
        target.offsetParent?.offsetTop +
        target.offsetTop - 70,
      behavior: "smooth",
    });
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          onClick={() => scrollTo(scrollItems?.[1])}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>description</Icon> Description
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          onClick={() => scrollTo(scrollItems?.[0])}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>group</Icon> People
        </Button>
      </ListItem>
    </List>
  );
}

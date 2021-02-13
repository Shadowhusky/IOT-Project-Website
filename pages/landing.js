import React, { useRef, useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import VideoSection from "pages-sections/LandingPage-Sections/VideoSection.js";
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const videoURL = "https://drive.google.com/file/d/1QNTorBOb2ArzmIFiLWrBlAW_nGax1pb7/view?usp=sharing";

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const scrollingBody = useRef(null);
  const [loadingState, setLoadingState] = useState(true);

  const scrollItems = ["_teamSection", ["_productSection", "_appSection", "_businessSection"], "_videoSection"];

  useEffect(() => {
    setLoadingState(false);
  }, []);

  const scrollTo = (element) => {
    const target = document.getElementsByClassName(element)[0];
    window.scrollTo({
      top:
        document.querySelector("._videoSection").offsetParent?.offsetTop +
        document.querySelector("._videoSection").offsetTop - 150,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes["landingpage-animated"]} ref={scrollingBody}>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="IOT Project - Team 1"
        rightLinks={
          !loadingState && (
            <HeaderLinks
              scrollItems={scrollItems}
              scrollingBody={scrollingBody}
            />
          )
        }
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image={require("assets/img/landing-bg.jpeg")}>
        <div className={classNames(classes.container, classes.maincontainer)}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Q-Farms</h1>
              <h4 className={classes.maintext}>
                As urban population grows in many parts of the world so does the
                demand for food. This project looks into designing an IoT system
                for sustainable Urban Farming to help feed the growing
                population, right at the heart of the city. The system will
                reduce the need of urban farmers to monitor crops by deploying a
                wireless IoT network with a cloud platform, providing valuable
                data live to the end users.
              </h4>
              <br />
              <Button
                color="info"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.open(videoURL)}
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection className={scrollItems[1]} />
          {/* <VideoSection className={scrollItems[2]} /> */}
          <TeamSection className={scrollItems[0]} />
          {/* <WorkSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

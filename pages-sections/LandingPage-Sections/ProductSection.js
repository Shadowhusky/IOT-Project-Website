import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import FlashOn from "@material-ui/icons/FlashOn";
import MoneyOff from "@material-ui/icons/MoneyOff";
import SportsEsports from "@material-ui/icons/SportsEsports";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

import classnames from "classnames";

// Resources
import app_bg from "assets/img/app_bg.png";
import app_0 from "assets/img/app_0.png";
import app_1 from "assets/img/app_1.png";
import app_2 from "assets/img/app_2.png";

import desc_0 from "assets/img/desc_0.png";
import desc_1 from "assets/img/desc_1.png";
import desc_2 from "assets/img/desc_2.png";
import desc_3 from "assets/img/desc_3.png";
import desc_4 from "assets/img/desc_4.png";
import desc_5 from "assets/img/desc_5.png";
import desc_6 from "assets/img/desc_6.png";
import desc_7 from "assets/img/desc_7.png";
import desc_8 from "assets/img/desc_8.png";
import desc_9 from "assets/img/desc_9.png";
import desc_10 from "assets/img/desc_10.png";

import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";

const useStyles = makeStyles(styles);

export default function ProductSection(props) {
  const { ...rest } = props;
  const classNames = rest.className;
  const classes = useStyles();
  return (
    <div className={classes.section + " " + classNames[0]}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            Quantum Farms’s mission is to provide average consumers (being the
            end user) that might be potential gardeners living in urban cities
            with affordable smart IoT urban farming device kits of growing their
            own produce in their homes as a replacement for the conventional
            open field farming. more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Actuators"
              description="Our smart IoT urban farming device kits include an integrated IoT system which built-in actuators to attend to the plants at any time of the day immediately."
              icon={FlashOn}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free to start"
              description="The smart IoT urban farming device kit comes with a freemium application ready to be installed in any preferred mobile/desktop device of our customer."
              icon={MoneyOff}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Interactive App"
              description="Enjoy using our application just like playing a game, easy to take control and have fun, even for kids."
              icon={SportsEsports}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.descriptionContainer}>
        <img src={desc_0}></img>
        <img src={desc_1}></img>
        <img src={desc_9}></img>
        <Reveal effect={classes.descImageAnimated}>
          <img
            src={desc_5}
            className={classnames(classes.descImage_app, classNames[1])}
          />
        </Reveal>
      </div>
      <div className={classes.mockupcontainer}>
        <img className={classes.mockupbg} src={app_bg} />
        <div className={classes.mockupimgcontainer}>
          <Fade right>
            <div className={classes.mockupblock}>
              <img className={classes.mockupimg} src={app_0} />
              <p className={classes.mockuptext}>
                Choose Your own plant From 1000+ seeds
              </p>
            </div>
          </Fade>
          <Fade left>
            <div className={classes.mockupblock}>
              <img className={classes.mockupimg} src={app_1} />
              <p className={classes.mockuptext}>
                When your little plant feel thirsty, watering it!
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className={classes.mockupblock}>
              <img className={classes.mockupimg} src={app_2} />
              <p className={classes.mockuptext}>
                Monitoring the status of the plant, in real time
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <div className={classes.descriptionContainer}>
        <img src={desc_2} />
        <img src={desc_4} className={classNames[2]} />
        <img src={desc_3} />
        <img src={desc_6} />
        <img src={desc_7} />
        <img src={desc_8} />
        <img src={desc_10} className={classes.logo} />
      </div>
    </div>
  );
}

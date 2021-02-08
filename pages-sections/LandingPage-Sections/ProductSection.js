import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

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

import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";

const useStyles = makeStyles(styles);

export default function ProductSection(props) {
  const { ...rest } = props;
  const classes = useStyles();
  return (
    <div className={classes.section + " " + rest.className}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
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
          <img src={desc_5} className={classes.descImage_app} />
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
        <img src={desc_2}></img>
        <img src={desc_4}></img>
        <img src={desc_3}></img>
        <img src={desc_6}></img>
        <img src={desc_7}></img>
        <img src={desc_8}></img>
      </div>
    </div>
  );
}

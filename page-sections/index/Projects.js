import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";

import image from "assets/img/dev/faces/avatar.jpg";
import image1 from "assets/img/dev/bg.jpg";
import image2 from "assets/img/dev/bg2.jpg";
import image3 from "assets/img/dev/bg3.jpg";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Projects() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h1>Projects</h1>
        <h4> Maybe write something here?, ...</h4>
        <div className={classes.space50} />
        <div id="images">
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <h4>Rounded Image</h4>
              <img
                src={image}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Circle Image</h4>
              <img
                src={image}
                alt="..."
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Rounded Raised</h4>
              <img
                src={image}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Circle Raised</h4>
              <img
                src={image}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
          </GridContainer>
          <GridContainer />

          <div className={classes.textCenter + " " + classes.sharingArea}>
            <GridContainer justify="center">
              <h3>See my profiles here:</h3>
            </GridContainer>
            <Button
              color="github"
              size="lg"
              href="https://github.com/codyjlin"
              target="_blank"
            >
              <i className={classes.socials + " fab fa-github"} /> GitHub
            </Button>
            <Button
              color="linkedin"
              size="lg"
              href="https://linkedin.com/in/codyjlin"
              target="_blank"
            >
              <i className={classes.socials + " fab fa-linkedin"} /> LinkedIn
            </Button>
          </div>
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}

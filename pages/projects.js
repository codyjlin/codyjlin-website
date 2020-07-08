import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Badge from "components/Badge/Badge.js";

import profile from "assets/img/dev/faces/christian.jpg";

import image1 from "assets/img/dev/bg.jpg";

import styles from "assets/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProjectsPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks type="projects" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "info",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/dev/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h2 className={classes.title}>Projects</h2>
                  </div>
                </div>
              </GridItem>
            </GridContainer>

            <div className={classes.description}>
              <p>
                Something about my passion for meaningful projects and hands-on
                experience.
              </p>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <h3>{"\xa0\xa0\xa0"}Generation Do!</h3>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer justify="center">
                  <GridItem
                    container
                    xs={12}
                    sm={12}
                    md={6}
                    alignContent="space-around"
                  >
                    <GridItem xs={12} sm={12} md={12}>
                      <GridContainer justify="center">
                        <GridItem xs={3} sm={3} md={3}>
                          <Badge color="primary">What</Badge>
                        </GridItem>
                        <GridItem xs={9} sm={9} md={9}>
                          <p>
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                          </p>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <GridContainer justify="center">
                        <GridItem xs={3} sm={3} md={3}>
                          <Badge color="primary">
                            {"\xa0"}Why{"\xa0"}
                          </Badge>
                        </GridItem>
                        <GridItem xs={9} sm={9} md={9}>
                          <p>
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                          </p>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6} justify="center">
                    <img alt="..." src={image1} className={classes.imgFluid} />
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>

            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <h3>{"\xa0\xa0\xa0"}SlackBot</h3>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer justify="center">
                  <GridItem
                    container
                    xs={12}
                    sm={12}
                    md={6}
                    alignContent="space-around"
                  >
                    <GridItem xs={12} sm={12} md={12}>
                      <GridContainer justify="center">
                        <GridItem xs={3} sm={3} md={3}>
                          <Badge color="primary">What</Badge>
                        </GridItem>
                        <GridItem xs={9} sm={9} md={9}>
                          <p>
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                          </p>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <GridContainer justify="center">
                        <GridItem xs={3} sm={3} md={3}>
                          <Badge color="primary">
                            {"\xa0"}Why{"\xa0"}
                          </Badge>
                        </GridItem>
                        <GridItem xs={9} sm={9} md={9}>
                          <p>
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                          </p>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6} justify="center">
                    <img alt="..." src={image1} className={classes.imgFluid} />
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

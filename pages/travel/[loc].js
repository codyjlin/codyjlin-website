import React from "react";
import Head from "next/head";
import Router from "next/router";

import { readJsonSync } from "fs-extra";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import Close from "@material-ui/icons/Close";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

// images
import importAll from "common/importAll.js";

import banff from "assets/img/travel/covers/banff.jpg";

import styles from "assets/jss/spotlightPage.js";
const useStyles = makeStyles(styles);

export async function getStaticPaths() {
	const data = readJsonSync("assets/data/travel.json");

	return {
		paths: data.map(({ id }) => `/travel/${id}`),
		fallback: false,
	};
}

export const getStaticProps = async ({ params }) => {
	const data = readJsonSync("assets/data/travel.json");
	const loc = params?.loc;
	const item = data.find(({ id }) => loc === `${id}`);

	const cover = require(`assets/img/travel/covers/${loc}.jpg`);
	const imgs = importAll(
		require.context("assets/img/travel", true, /\.jpg$/)
	);
	const resultImgs = {};
	for (const [key, value] of Object.entries(imgs)) {
		if (key.split("/")[0] === loc) resultImgs[key] = value;
	}
	return {
		props: {
			cover: cover,
			imgs: resultImgs,
			name: item.name,
			setting: item.setting,
		},
	};
};

export default function Loc(props) {
	const classes = useStyles();
	const { cover, imgs, name, setting, ...rest } = props;
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

	var col1 = {},
		col2 = {},
		i = 0;
	for (const [key, value] of Object.entries(imgs)) {
		switch (i % 2) {
			case 0:
				col1[key] = value;
				break;
			default:
				col2[key] = value;
				break;
		}
		i++;
	}
	return (
		<React.Fragment>
			<Head>
				<title>Cody Lin | Travel | {name}</title>
			</Head>
			<div>
				<Header
					color="transparent"
					brand="NextJS Material Kit"
					rightLinks={<HeaderLinks type="travel" />}
					fixed
					changeColorOnScroll={{
						height: 200,
						color: "info",
					}}
					{...rest}
				/>
				<Parallax small filter image={cover} />
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div>
						<div className={classes.container}>
							<GridContainer justify="center">
								<GridItem
									container
									xs={2}
									sm={1}
									md={1}
									justify="center"
									direction="column"
								>
									<IconButton
										className={classes.travelCloseButton}
										key="close"
										aria-label="Close"
										color="primary"
										onClick={() => Router.back()}
									>
										<Close
											className={classes.travelClose}
										/>
									</IconButton>
								</GridItem>

								<GridItem
									container
									xs={10}
									sm={10}
									md={10}
									justify="center"
								>
									<h3 style={{ textAlign: "center" }}>
										<b>{name}</b>
										<br />
										{setting}
									</h3>
								</GridItem>
								<GridItem xs={false} sm={1} md={1}>
									<div />
								</GridItem>

								<GridItem xs={12} sm={12} md={6}>
									{Object.keys(col1).map((key, index) => {
										return (
											<img
												alt="..."
												src={col1[key]}
												className={navImageClasses}
											/>
										);
									})}
								</GridItem>
								<GridItem xs={12} sm={12} md={6}>
									{Object.keys(col2).map((key, index) => {
										return (
											<img
												alt="..."
												src={col2[key]}
												className={navImageClasses}
											/>
										);
									})}
								</GridItem>
							</GridContainer>
							<div className={classes.space50} />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
}

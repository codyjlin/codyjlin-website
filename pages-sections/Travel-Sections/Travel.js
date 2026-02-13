import React from "react";
import Link from "next/link";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@mui/styles";

// @material-ui/icons
import LocationOn from "@mui/icons-material/LocationOn";

// core components
import GridItem from "components/Grid/GridItem.js";
import getImageSrc from "common/getImageSrc.js";

import styles from "assets/jss/spotlightPage.js";

const useStyles = makeStyles(styles);

export default function Travel(props) {
	const classes = useStyles();
	const { name, setting, cover, loc } = props;
	const imageClassesHover = classNames(
		classes.imgRounded,
		classes.imgFluid,
		classes.imgHover
	);

	return (
		<GridItem container xs={12} sm={6} md={4}>
			<GridItem>
				<Link href={`/travel/${loc}`}>
					<img src={getImageSrc(cover)} className={imageClassesHover} />
				</Link>
			</GridItem>

			<GridItem>
				<div className="slick-caption">
					<h4>
						<b>
							<LocationOn className={classes.icon} />
							{name}
						</b>
						<br />
						{setting}
						<div className={classes.space20} />
					</h4>
				</div>
			</GridItem>
		</GridItem>
	);
}

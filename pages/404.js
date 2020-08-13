import React, { Component } from "react";
// import Router from "next/router";

import "assets/scss/404.scss";

export default class _404 extends Component {
	componentDidMount = () => {
		// Router.push("/components");
	};

	render() {
		return (
			<div className="box">
				<div className="box__ghost">
					<div className="symbol"></div>
					<div className="symbol"></div>
					<div className="symbol"></div>
					<div className="symbol"></div>
					<div className="symbol"></div>
					<div className="symbol"></div>

					<div className="box__ghost-container">
						<div className="box__ghost-eyes">
							<div className="box__eye-left"></div>
							<div className="box__eye-right"></div>
						</div>
						<div className="box__ghost-bottom">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
					<div className="box__ghost-shadow"></div>
				</div>

				<div className="box__description">
					<div className="box__description-container">
						<div className="box__description-title">Whoops!</div>
						<div className="box__description-text">
							You've ventured to a ghost page.
						</div>
					</div>

					<a href="/" className="box__button">
						Go home
					</a>
				</div>
			</div>
		);
	}
}

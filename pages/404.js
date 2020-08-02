import React, { Component } from "react";
// import Router from "next/router";

import "assets/scss/404.scss";

export default class _404 extends Component {
	componentDidMount = () => {
		// Router.push("/components");
	};

	render() {
		return (
			<div class="box">
				<div class="box__ghost">
					<div class="symbol"></div>
					<div class="symbol"></div>
					<div class="symbol"></div>
					<div class="symbol"></div>
					<div class="symbol"></div>
					<div class="symbol"></div>

					<div class="box__ghost-container">
						<div class="box__ghost-eyes">
							<div class="box__eye-left"></div>
							<div class="box__eye-right"></div>
						</div>
						<div class="box__ghost-bottom">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
					<div class="box__ghost-shadow"></div>
				</div>

				<div class="box__description">
					<div class="box__description-container">
						<div class="box__description-title">Whoops!</div>
						<div class="box__description-text">
							You've ventured to a ghost page.
						</div>
					</div>

					<a href="/" class="box__button">
						Go home
					</a>
				</div>
			</div>
		);
	}
}

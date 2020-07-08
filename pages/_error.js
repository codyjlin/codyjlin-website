import React, { Component } from "react";
import Router from "next/router";

export default class _error extends Component {
  componentDidMount = () => {
    // Router.push("/components");
  };

  render() {
    return <div> 
      "This is not the page you're looking for"
    </div> ;
      
  }
}

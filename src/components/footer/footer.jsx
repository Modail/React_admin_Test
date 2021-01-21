import React, { Component } from "react";
import "./footer.sass";

export default class MyFooter extends Component {
  render() {
    return (
      <div className="footer-container">
        <span>Design by @</span>
        <a href="https://github.com/Modail">Modail</a>
        <span>All Rights Reserved</span>
      </div>
    );
  }
}

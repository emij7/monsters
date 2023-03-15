import React, { Component } from "react";
import "./searchBox.styles.css";

export default class SearchBox extends Component {
  render() {
    const { onChangeHandler, searchPlaceholder, className } = this.props;
    return (
      <input
        className={className}
        type="search"
        placeholder={searchPlaceholder}
        onChange={onChangeHandler}
      />
    );
  }
}

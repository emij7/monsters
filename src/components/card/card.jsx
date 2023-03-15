import React, { Component } from "react";
import "./card.styles.css";

export default class Card extends Component {
  render() {
    const { name, email, id } = this.props.monster;
    return (
      <div className="card-container" id={id}>
        <img
          src={`https://robohash.org/${id}?set=set2`}
          alt={`monster ${name}`}
        />
        <h2>{name.toUpperCase()}</h2>
        <p className="card-email">{email}</p>
      </div>
    );
  }
}

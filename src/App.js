import React, { Component } from "react";
import Form from "./components/Form";

import "./App.css";

const Card = props => {
  return (
    <div>
      <img width="80" src={props.avatar_url} />
      <div style={{ display: "inline-block", marginLeft: 10 }}>
        <div style={{ fontSize: "1.25em", fontWeight: "bold" }}>
          {" "}
          {props.name}{" "}
        </div>
        <div> {props.company}.</div>
      </div>
    </div>
  );
};

const CardList = props => {
  return (
    <div>
      {props.cards.map(card => (
        <Card {...card} />
      ))}
    </div>
  );
};

class App extends Component {
  state = {
    cards: []
  };

  addNewCard = cardData => {
    //console.log(cardData)
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardData)
    }));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;

import React from "react";
import axios from "axios";

class Form extends React.Component {
  state = {
    userName: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="Github Username"
          required
        />
        <button type="submit">Add Card Here</button>
      </form>
    );
  }
}
export default Form;

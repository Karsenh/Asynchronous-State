import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      number: 0
    };
  }

  handleClick = () => {
    this.setState(
      (prevState, prevProps) => {
        return { number: prevState.number + 1 };
      },
      () => console.log(this.state.number)
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}> Update Count </button>
      </div>
    );
  }
}

export default App;

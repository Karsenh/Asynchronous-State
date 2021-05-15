import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  // Added props to constructor -> super -> this.props to access props within constructor
  constructor(props) {
    super(props);
    this.state = {
      // Accessing this.props.increment via props from constructor and super
      number: 47 + this.props.increment
    };
  }

  handleClick = () => {
    this.setState(
      (prevState, prevProps) => {
        return { number: prevState.number + prevProps.increment };
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

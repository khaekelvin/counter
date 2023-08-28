import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  addNum() {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }

  subNum() {
    this.setState({
      count: this.state.count - 1,
    });
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <h1>counter - {this.state.count}</h1>
        <button onClick={() => this.addNum} className="add">
          Add
        </button>
        <button onClick={() => this.subNum} className="sub">
          Subtract
        </button>
      </div>
    );
  }
}

export default Counter;

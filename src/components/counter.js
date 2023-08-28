import React, { Component } from "react";

export class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="top">
        <h1>Counter = {this.state.count}</h1>
        <button onClick={() => this.addNum()}>Add</button>
        <button onClick={() => this.subNum()}>Subtract</button>
      </div>
    );
  }

  addNum() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  subNum() {
    this.setState({
      count: this.state.count - 1,
    });
  }
}

export default counter;

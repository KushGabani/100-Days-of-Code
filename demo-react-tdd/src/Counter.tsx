import React, { Component } from "react";

export type CounterProps = { label?: string };

class Counter extends Component<CounterProps> {
  render() {
    let { label = "Count" } = this.props;
    return (
      <div>
        <label htmlFor={"counter"} role={"label"}>
          {label}
        </label>
        &nbsp;
        <span id={"counter"} role={"counter"}>
          1
        </span>
      </div>
    );
  }
}

export default Counter;

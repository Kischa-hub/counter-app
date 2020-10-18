import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);
  // }

  render() {
    //console.log("counter - Renderd");
    return (
      <React.Fragment className="row">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          className="button btn-secondary btn-sm m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>

        <button
          className="button btn-secondary btn-sm m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
          disabled={this.props.counter.value === 0 ? "disabled" : ""}
        >
          -
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          X
        </button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;

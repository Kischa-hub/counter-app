import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // console.log("counters - Renderd");

    //destructing Argument
    // const {
    //   onReset,
    //   onDelete,
    //   onIncrement,
    //   counters,
    //   onDecrement,
    // } = this.props;

    return (
      <div>
        <button
          //  this.props.onReset aber ich benutze Destructing Argument
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <table className="table tbody tr td">
          <tbody>
            {this.props.counters.map((counter) => (
              <tr key={counter.id}>
                <th key={counter.id}>
                  <Counter
                    id={counter.id}
                    counter={counter}
                    key={counter.id}
                    //this.props.onDelete aber ich benutze Destructing Argument
                    onDelete={this.props.onDelete}
                    counter={counter}
                    //this.props.onIncrement aber ich benutze Destructing Argument
                    onIncrement={this.props.onIncrement}
                    //this.props.onDecrement aber ich benutze Destructing Argument
                    onDecrement={this.props.onDecrement}
                  ></Counter>
                </th>
              </tr>
            ))}
          </tbody>
        </table>

        {/* {this.state.counters.map((counter) => (
          <Counter key={counter.id}></Counter>
        ))} */}
      </div>
    );
  }
}

export default Counters;

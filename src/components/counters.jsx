import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
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
                    key={counter.id}
                    onDelete={this.props.onDelete}
                    counter={counter}
                    onIncrement={this.props.onIncrement}
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

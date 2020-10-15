import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        {/* <table className="table tbody tr td">
          <tbody>
            {this.state.counters.map((counter) => (
              <tr>
                <th>
                  <Counter key={counter.id}></Counter>
                </th>
              </tr>
            ))}
          </tbody>
        </table> */}

        {this.state.counters.map((counter) => (
          <Counter key={counter.id}></Counter>
        ))}
        <br />
      </div>
    );
  }
}

export default Counters;

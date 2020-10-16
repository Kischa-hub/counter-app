import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 1 },
      { id: 4, value: 10 },
    ],
  };

  handelDelete = (counterId) => {
    // console.log("Event Handler Called", this.state.counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handelReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ Counters: counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handelReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <table className="table tbody tr td">
          <tbody>
            {this.state.counters.map((counter) => (
              <tr key={counter.id}>
                <th key={counter.id}>
                  <Counter
                    key={counter.id}
                    onDelete={this.handelDelete}
                    counter={counter}
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

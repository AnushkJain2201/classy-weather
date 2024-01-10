import React from "react";

class Counter extends React.Component {

  constructor(props) {
    super(props);

    // One huge state object, not the multiple state variables like we do with the use state hook
    this.state = { count: 5 };

    // Inside the JSX, the handlers function loses the value of this keyword that's why we have to bind this keyword to the handlers function like this
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);

  }

  handleDecrement() {
    this.setState((currState) => {
      return {count: currState.count - 1};
    });
  }

  handleIncrement() {
    this.setState((currState) => {
      return {count: currState.count + 1};
    });
  }

  render() {
    const date = new Date('june 21 2022');

    date.setDate(date.getDate() + this.state.count);

    return <div>
      <button onClick={this.handleDecrement}>-</button>

      <span>{date.toDateString()} [{this.state.count}]</span>

      <button onClick={this.handleIncrement}>+</button>
    </div>
  }
}

export default Counter;
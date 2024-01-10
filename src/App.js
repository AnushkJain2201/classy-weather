import React from "react";

class Counter extends React.Component {

  constructor(props) {
    super(props);

    // One huge state object, not the multiple state variables like we do with the use state hook
    this.state = { count: 5 }

  }

  render() {
    return <div>
      <button>-</button>

      <span>{this.state.count}</span>

      <button>+</button>
    </div>
  }
}

export default Counter;
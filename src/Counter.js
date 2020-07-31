// import React, { Component } from "react";

// export default class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.increment = this.increment.bind(this);
//   }
//   increment() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Counter App</h1>
//         <button onClick={this.increment}>
//           Clicked me {this.state.count} times
//         </button>
//       </div>
//     );
//   }
// }
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={() => setCount(count + 1)}>
        Clicked me {count} times
      </button>
    </div>
  );
}

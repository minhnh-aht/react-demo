import React, { PureComponent } from "react";

class ComponentDidMount extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount", this.state.count);
  }

  render() {
    return (
      <div>
        <h1>componentDidMount</h1>
        {this.state.count}
        <button
          onClick={() =>
            this.setState((prevState) => ({
              count: prevState.count + 1,
            }))
          }
        >
          Increase
        </button>
      </div>
    );
  }
}

export default ComponentDidMount;

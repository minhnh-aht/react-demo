import React, { PureComponent } from "react";

class ComponentWillUnmount extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentSecond: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        currentSecond: prevState.currentSecond + 1,
      }));
      // console.log(this.state.currentSecond);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { currentSecond } = this.state;
    return (
      <>
        <h1>componentWillUnmount</h1>
        <p>{currentSecond}</p>
        <button
          onClick={() => this.setState({ currentSecond: currentSecond + 1 })}
        >
          Hello
        </button>
      </>
    );
  }
}

export default ComponentWillUnmount;

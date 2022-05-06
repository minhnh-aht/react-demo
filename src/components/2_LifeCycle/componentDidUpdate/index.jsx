import React, { PureComponent } from "react";

const getCurrentDate = () => {
  let date = new Date();
  let result = "";
  result +=
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    (date.getHours() + 1) +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
  return result;
};

class ComponentDidUpdate extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidUpdate() {
    // this.setState((prevState) => ({count: prevState.count + 1}));
    console.log("componentDidUpdate", getCurrentDate());
  }

  render() {
    return (
      <div>
        <h1>componentDidUpdate</h1>
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

export default ComponentDidUpdate;

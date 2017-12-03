import React, { Component } from "react";
const style = {
  padding: "1%"
};

export default class Home extends Component {
  constructor(context, props) {
    super(context);
  }

  render() {
    return (
      <div style={style}>
        <h3>Welcome to About!</h3>
      </div>
    );
  }
}

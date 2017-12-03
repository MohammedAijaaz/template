import React, { Component } from "react";
import ProductStore from "../stores/ProductStore";
import { observer } from "mobx-react";

const style = {
  padding: "1%"
};

@observer
class Home extends Component {
  constructor(context, props) {
    super(context);
  }

  render() {
    return (
      <div style={style}>
        <h3>Hello world, welcome to Home!</h3>
      </div>
    );
  }
}

export default Home;

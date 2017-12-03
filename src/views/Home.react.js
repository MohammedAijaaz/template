import React, { Component } from "react";
import ProductStore from "../stores/ProductStore";
import { observer } from "mobx-react";
import Product from "../components/Product.react";

const style = {
  padding: "1%"
};

@observer
class Home extends Component {
  constructor(context, props) {
    super(context);
  }

  displayProducts = () => {
    return ProductStore.products_list.map(product => {
      return (
        <div className="col">
          <Product product={product} history={this.props.history} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <br />
        <div style={{ marginTop: "3em" }}>
          <div className="row">{this.displayProducts()}</div>
        </div>
      </div>
    );
  }
}

export default Home;

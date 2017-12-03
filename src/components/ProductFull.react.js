import React, { Component } from "react";
import Paper from "material-ui/Paper";
import { observer } from "mobx-react";
import { observable } from "mobx";
import Product from "../stores/Product";
import ProductSore from "../stores/ProductStore";

@observer
class ProductFull extends Component {
  @observable product: Product;

  constructor(context, props) {
    super(context);
    this.product = null;
    this.getProduct();
  }

  getProduct = () => {
    let { pathname } = this.props.history.location;
    let id = pathname.substring(9);
    this.product = ProductSore.getProduct(id);
  };

  render() {
    return (
      <div className="container-fluid">
        <br />
        <div style={{ marginTop: "3em" }}>
          <Paper zDepth={3} style={{ height: "20em" }}>
            {this.product.id}
            {this.product.name}
            {this.product.description}
          </Paper>
        </div>
      </div>
    );
  }
}

export default ProductFull;

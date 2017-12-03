import React, { Component } from "react";
import { observer } from "mobx-react";
// import { observable } from "mobx";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

@observer
class Product extends Component {
  constructor(context, props) {
    super(context);
  }

  handleSeeProvider = () => {};

  handleFull = () => {
    let { id } = this.props.product;
    this.props.history.push("/product/" + id);
  };

  render() {
    let { product } = this.props;
    return (
      <div
        className="container"
        style={{ marginBottom: "3%", maxWidth: "25em" }}
      >
        <Card>
          <CardHeader title={product.name} subtitle={product.id} />
          <CardMedia
            overlay={
              <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
            }
          >
            <img src={require("../images/dowload1.jpg")} alt="" />
          </CardMedia>
          <CardText>{product.description}</CardText>
          <CardActions>
            <FlatButton label="Full" onClick={this.handleFull} />
            <FlatButton
              label="See Providers"
              onClick={this.handleSeeProvider}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Product;

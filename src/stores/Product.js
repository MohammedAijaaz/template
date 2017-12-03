import { observable, computed } from "mobx";
import shortid from "shortid";

class Product {
  @observable id: String;
  @observable name: String;
  @observable description: String;
  @observable price: Float;

  // extendObservable(this, {
  //     id: String,
  //     name: String,
  //     description: String,
  //     price: Float
  // })

  constructor(name, description, price = 0) {
    this.id = shortid.generate();
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

export default Product;

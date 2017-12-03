import { observable, computed } from "mobx";
import Product from "./Product";

class Products {
  @observable products_list: Array<Product>;

  constructor() {
    this.products_list = [];
  }

  addProduct = () => {
    let new_product = new Product("Product1", "Desc1", 100);
    this.products_list.push(new_product);
  };
}

let ProductStore = new Products();
export default ProductStore;

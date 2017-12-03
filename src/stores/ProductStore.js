import { observable } from "mobx";
import Product from "./Product";

class Products {
  @observable products_list: Array<Product>;

  constructor() {
    console.log("store");
    this.products_list = [];
    for (let i = 0; i < 10; i++) {
      this.addProduct();
      this.addProduct();
      this.addProduct();
    }
  }

  addProduct = () => {
    let new_product = new Product("Product1", "Desc3", 100);
    this.products_list.push(new_product);
  };

  getProduct = id => {
    let retval = null;
    this.products_list.forEach(product => {
      if (product.id === id) {
        retval = product;
      }
    });
    return retval;
  };
}

let ProductStore = new Products();
export default ProductStore;

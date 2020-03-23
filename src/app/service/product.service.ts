import { Injectable } from "@angular/core";
import { data } from "../MockData";
import { Product } from "../Product";

@Injectable()
export class ProductService {
  products = data;
  
  constructor() {}
  getProducts() {
    //lay danh sach san pham
    return this.products;
  }
  getProduct(id) {
    return this.products.find(product => product.id == id);
    // chi tiet san pham
  
  }
  removeProduct(id) {
    //xoa san pham
    return (this.products = this.products.filter(product => product.id != id));
  }
  addProduct(product) {
       let newObj = { id: 6, ...product};
    this.products.push(product)
  }
  editProduct() {
    // sua san pham
  }
  updateProduct(product){ //update san pham
    return this.products.map(item => item.id === product.id ? product: item);
  }
}

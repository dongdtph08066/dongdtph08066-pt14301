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
  getProduct() {
    // chi tiet san pham
  
  }
  removeProduct(id) {
    //xoa san pham
    return (this.products = this.products.filter(product => product.id != id));
  }
  addProduct() {
    // them san pham
  }
  editProduct() {
    // sua san pham
  }
}

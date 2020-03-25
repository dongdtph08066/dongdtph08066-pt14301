import { Injectable } from "@angular/core";
import { data } from "../MockData";
import { Product } from "../Product";
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {
  products = data;
  api = 'http://5e7af6a20e04630016332744.mockapi.io/product ';

  
  constructor(
    private http: HttpClient
  ) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.api}/product`);
    //lay danh sach san pham
    // return this.products;
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

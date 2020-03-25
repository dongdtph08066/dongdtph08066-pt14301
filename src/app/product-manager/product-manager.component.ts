import { Component, OnInit } from "@angular/core";
import { data } from "../MockData";
import { Product } from "../Product";
import { ProductService } from '../service/product.service';
@Component({
  selector: "app-product-manager",
  templateUrl: "./product-manager.component.html",
  styleUrls: ["./product-manager.component.css"]
})
export class ProductManagerComponent implements OnInit {
  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.getProducts();
  }
  // products = data;
  // selected: Product;
  showDetail(product) {
    this.selected = product;
  }
  removeItem(id) {
    return (this.products = this.products.filter(product => product.id != id));
  }
    getProducts() {
   
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
}

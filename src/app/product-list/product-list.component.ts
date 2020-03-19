import { Component, OnInit } from '@angular/core';
import{ data } from '../MockData';
import { Product } from '../Product';
import { Pro } from '../Pro';
import{ datas } from '../MockTable';
import { ProductService} from './service/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[]
  
  constructor(
     private productService : ProductService ) { }

  ngOnInit() {
    this.products = this.productService.getProucts();
  } 
  selected: Product;
//   products = data;
//    selected: Product;
   ShowDetail(product){
     this.selected = product;
     console.log(this.selected);
//      this.selected = this.product;
//      console.log(this.selected);
//    }
//  removeItem(id){
//    console.log(1);

  }
  removeItem(id){
    this.products = this.products.filter(product => product.id !=id);
  }
   pros = datas;
  selectedd: Pro;
  ShowDetable(pro){
    this.selected = pro;
    console.log(this.selectedd);
  }
  removeItemm(id){
    this.pros = this.pros.filter(pro => pro.id !=id);
  }
}
import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    // product : Product = {
    //   name: "Item 1",
    //   price: 99.99,
    //   desc: "Noi dung!!!!",
    //   img :'http://placehold.it/700x400',
    //   status: true

    // }
    // changeStatus(){
    //   this.product.status = false; 
    // }
    chaneTitle(e){
      // this.product.name=e.target.value;
     

    }


}

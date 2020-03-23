import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './service/product.service';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,  AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, SlideComponent, ProductComponent, ProductListComponent, CategoryComponent, ProductDetailComponent, ProductAddComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }

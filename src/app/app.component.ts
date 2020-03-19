import { Component } from '@angular/core';
import { data } from "../MockData";
import { Product } from "../Product";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}

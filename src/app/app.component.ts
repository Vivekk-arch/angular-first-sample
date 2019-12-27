import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-sample';
  todayDate = new Date();
  dec: any = 154.567567;
  jsonval = {name: 'Vivek', age: 35, address: {address1: 'tamilnadu', address2: 'karnataka'}};
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
}

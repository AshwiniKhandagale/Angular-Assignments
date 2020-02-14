import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BuiltInPipe';
  lowerCase = 'ASHWINI KHANDAGALE';
  uppercase = 'ashwini khandagale';
  Today = new Date();
  jsonValue = {
    name:'ash',
    id:1,
    age:20
  }
}

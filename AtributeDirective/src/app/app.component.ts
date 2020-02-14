import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Attribute Directive';
  isColorChange=false;
  isRedColor=false;
  isYellowColor=false;
  isBlueColor= false;
  changeColor(){
    this.isColorChange = !this.isColorChange
  }
  changeClass(){
   this.isRedColor = !this.isRedColor;
  }
  changeYellow(){
   this.isYellowColor = !this.isYellowColor;
  }
  changeBlue(){
   this.isBlueColor = !this.isBlueColor;
  }
}

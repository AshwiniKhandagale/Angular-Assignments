import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Structural Directive';
  isShow = false;
  personInfo = [{
    name:'Ashwini',
    city:'narayangoan',
    country:'CHINA'
  },
  {
    name:'Pranali',
    city:'Alephata',
    country:'USA'
  },{
    name:'Akansha',
    city:'Pune',
    country:'IND'
  },{
    name:'Pragati',
    city:'Godegoan',
    country:'IND'
  },]

  onClick(){
    this.isShow = !this.isShow;
  }
}

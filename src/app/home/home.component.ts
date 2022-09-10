import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  headername="La nostra Appa";

  
  stipendio = 1000

 
 
  

  isdisabled = true;

  colorname = "red";

  classname = 'headclass';

  colors=['green','red','grey','black','white']

  stylevalue={"color":"red","font-size":"40px","font-weight":"600"};
  ismarried = false; 

  ngOnInit(): void {
  }

  cliccaQui(name:string){
    alert(name);
  }

}

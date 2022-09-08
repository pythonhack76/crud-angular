import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  headername="La nostra Appa";
  stipendio = '1000'

  isdisabled = true;

  ismarried = false; 

  ngOnInit(): void {
  }

  cliccaQui(name:string){
    alert(name);
  }

}

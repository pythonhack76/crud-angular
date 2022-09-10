import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
  }
  
title = "pippo";
isVisible = true;
onInput(event: Event){
  this.title = (<HTMLInputElement>event.target).value
}
onClick(event: Event){
}

}

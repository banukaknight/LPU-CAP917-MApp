import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  viewMode = "other";

//automated gallery stuff
items = ['m12','m11','m10', 'm09', 'm08', 'm07', 'm06', 'm05', 'm04', 'm03', 'm02', 'm01' ];
currentItem: any = "m07";
private pointer: number = 0;
private interval;

  constructor() { }

  ngOnInit(): void {

      //automated gallery using jscript??
      this.interval = setInterval(() => {
        this.currentItem = this.items[this.pointer];
        this.pointer++;
        if (this.pointer >= this.items.length) { this.pointer = 0 };
      }, 1000);

  }

}

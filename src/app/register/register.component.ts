import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myObj1 = new Class4ca1("","","","1","Dinner","2021-01-01","10:00",false, "Chicken with Rice", "Cash");

  constructor() { }

  ngOnInit(): void {
  }

}

export class Class4ca1 {
  constructor(
    public sname: string,
    public semail: string,
    public sphone: string,
    public sguests: string,
    public stype: string,
    public sdate: string,
    public stime: string,
    public sagree: boolean,
    public smain: string,
    public spay: string
    
  ) { }
}

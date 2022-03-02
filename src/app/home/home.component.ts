import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  defaultList =[
    {
      name:"Harshita",
      college:"Hamdard",
      degree:"B-Tech",
      Specialization:"Java"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
    getInfo($event:any){
      this.defaultList.push($event);
    }
}

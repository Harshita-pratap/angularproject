import { Component, OnInit , Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() listData:any =[];
  list2 : any =[];
 
  constructor() { }


  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChange):void{
    this.list2=JSON.parse(JSON.stringify(this.listData));
  }

}

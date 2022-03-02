import { Component, OnInit , ViewChild, Output, EventEmitter, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
     
  @ViewChild('f') myform!: ElementRef | any;
  
  userData = {
    name:'',
    college:'',
    degree:'',
    Specialization:''
  }
  
  @Output() Data = new EventEmitter<{name: string, college: string, degree:string, Specialization:string}>()
  constructor(){}
    
   
   addItem(){
   this.Data.emit(this.userData);
   
    
  }
  reset(){
    this.myform.reset();
  }

 

  ngOnInit(): void {
  }

}

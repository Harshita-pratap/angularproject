import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
     
  userForm!: FormGroup;
  listData:any;

  constructor(private fb: FormBuilder) {
    this.listData=[];
    this.userForm = this.fb.group({
      name:['',Validators.required],
      college:['',Validators.required],
      degree:['',Validators.required],
      Specialization: ['',Validators.required]
    })
   }
   addItem(){
    this.listData.push(this.userForm.value);
    
  }
  reset(){
    this.userForm.reset();
  }

 

  ngOnInit(): void {
  }

}

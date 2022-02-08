import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  addEmployee=new FormGroup({
    fullname:new FormControl("",[Validators.required,Validators.pattern(/^[a-z][a-z '-.,]{0,31}$|^$/)]),
    Designation:new FormControl("",[Validators.required]),
    Salary:new FormControl("",[Validators.required,Validators.min(10000) ]),
    Age:new FormControl("",[Validators.required,Validators.max(100),Validators.min(1)])  

  })
  get fullname(){
    return this.addEmployee.get("fullname")
  }
  get Designation(){
    return this.addEmployee.get("Designation")
  }
  get Salary(){
    return this.addEmployee.get("Salary")
  }
  get Age(){
    return this.addEmployee.get("Age")
  }

  //send the form to the server
  addEmp(){
    console.log(  this.addEmployee.value);
    this.serve.post("http://localhost:3000/comments",this.addEmployee.value).subscribe((val)=>{
      this.addEmployee.reset()
      alert("Employee details added successfully")
      this.route.navigate(["employee"])
    },err=>{
      alert("something gets wrong")
    })
  }
  constructor(private route:Router,private serve:HttpClient) { }

  ngOnInit(): void {
  }

}

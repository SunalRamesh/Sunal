import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  constructor(private route:Router) { }

  RegisterForm=new FormGroup({
    uname:new FormControl("",[Validators.required]),
    username:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$")]),
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required ]),
    Confirmpassword:new FormControl("",[Validators.required])
    // ,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
  })
  get uname(){
    return this.RegisterForm.get("uname")
  }
  get username(){
    return this.RegisterForm.get("username")
  }
  get email(){
    return this.RegisterForm.get("email")
  }
  get password(){
    return this.RegisterForm.get("password")
  }
  get Confirmpassword(){
    return this.RegisterForm.get("Confirmpassword")
  }
  subRegisterForm(){
    // console.log( this.RegisterForm.value);
    this.RegisterForm.value.post("./",this.RegisterForm.value).subscribe((res)=>{
      alert("Registered succesfully")
      this.RegisterForm.reset()
      this.route.navigate(["login"]) 
    },err=>{
      alert("somethings get wrong");
    })
    
  }
  flag:boolean=false
  comparaPass(){
    if(this.password.value !=this.Confirmpassword.value){
this.flag=true
    }else{
      this.flag=false
    }
  }

  ngOnInit(): void {
  }

}

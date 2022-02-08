import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private search: HttpClient, private route: Router) { }
  loginForm = new FormGroup({
    logemail: new FormControl("", [Validators.required, Validators.email]),
    logpass: new FormControl("", [Validators.required])
  })

  get logemail() {
    return this.loginForm.get('logemail')
  }

  get logpass() {
    return this.loginForm.get('logpass')
  }

  login() {
    console.log(this.loginForm.value);
    this.search.get(" http://localhost:3000/posts").subscribe(val => {
      const use = val.find((a:any) => {
        a.email == this.loginForm.value.logemail && a.password == this.loginForm.value.logpass
      })
      if (use) {
        alert("login successfully")
        this.loginForm.reset()
        this.route.navigate(["addEmployee"])
      } else {
        alert("something get wrong")
      }
    })

  }


  ngOnInit(): void {
  }

}


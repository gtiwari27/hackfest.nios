import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm:NgForm){
    console.log(signInForm.value);
  }

  checkCredentials(){
    if(this.username == "admin" && this.password == "infoblox") {
      
      console.log("Welcome to Infoblox");
      this.router.navigate(['dashboard']);

    }
    else {
      console.log("User Unauthorized");
    }
  }


}

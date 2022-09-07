import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  message = '';

  constructor(private service : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.service.login(this.user).subscribe(
      data =>{
         console.log("response received")
        this.router.navigate(['/goals'])
      },
      error =>{
        console.log("exception occured")
      this.message="Bad credentials, please enter valid email and password."
      }
    )
  }

  goToRegister() {
    this.router.navigate(['/register'])
  }
}
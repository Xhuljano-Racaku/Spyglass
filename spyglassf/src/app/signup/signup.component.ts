import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User();
  msg='';

  constructor(private service : UserService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.service.register(this.user).subscribe(
      date =>{
        console.log("response received");
        this.router.navigate(['/login'])
      },
      error =>{
        console.log("exception occured");
        this.msg="This email already exist. Try to login"
      }
    )

  }
}

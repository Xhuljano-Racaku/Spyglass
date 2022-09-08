import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.service.setIsAuthenticated(false);
    this.router.navigate(['/login'])
  }

  goToGoalList(){
    this.router.navigate(['/goals'], {queryParams: {user: this.service.activeUser}})
  }

  goToAddGoal(){
    this.router.navigate(['/add'], {queryParams: {user: this.service.activeUser}})
  }
}

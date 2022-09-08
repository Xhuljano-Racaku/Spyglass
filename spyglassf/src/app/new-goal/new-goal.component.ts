import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalApiService } from '../goal-api.service';
import { Goal } from '../model/Goal';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.css']
})
export class NewGoalComponent implements OnInit {

  user: number = 0;
  newGoalForm: FormGroup= new FormGroup({});
  goal: Goal = new Goal();
  constructor(private service: GoalApiService, private router: Router, private route: ActivatedRoute, private userService : UserService) {
   }
  get name() {
    return this.newGoalForm.get('name')
  }

  get description() {
    return this.newGoalForm.get('description')
  }

  get image() {
    return this.newGoalForm.get('image')
  }

  get targetDate() {
    return this.newGoalForm.get('date')
  }

  get targetAmount() {
    return this.newGoalForm.get('targetAmount')
  }

  get savedAmount() {
    return this.newGoalForm.get('savedAmount')
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.user = params['user']
    })

    this.newGoalForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'image': new FormControl('http://dummyimage.com/100x100.png/ff4444/ffffff'),
      'date': new FormControl('', Validators.required),
      'targetAmount': new FormControl('', Validators.required),
      'savedAmount': new FormControl('', Validators.required)
    });
  }

  save(): void {
    this.goal.user.userId = this.user
    let date = new Date(this.newGoalForm.value.date.year, this.newGoalForm.value.date.month -1, this.newGoalForm.value.date.day);
    this.goal.name =this.newGoalForm.value.name;
    this.goal.description =this.newGoalForm.value.description;
    this.goal.image =this.newGoalForm.value.image;
    this.goal.targetDate =date;
    this.goal.targetAmount =this.newGoalForm.value.targetAmount;
    this.goal.savedAmount =this.newGoalForm.value.savedAmount;
    console.log(this.goal)
    this.service.save(this.goal).subscribe(resp =>{
      this.goal = resp;
      this.newGoalForm.reset();
      setTimeout(()=> {
        this.router.navigate(['/goals'], {queryParams: {user: this.userService.activeUser}});
      },50)

    })
  }

  goToGoalList(){
    this.router.navigate(['/goals'], {queryParams: {user: this.userService.activeUser}})
  }
}

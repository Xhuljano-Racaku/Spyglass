import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoalApiService } from '../goal-api.service';
import { Goal } from '../model/Goal';
import {NgbDateStruct, NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.css']
})
export class NewGoalComponent implements OnInit {

  model!: NgbDateStruct;
  newGoalForm: FormGroup= new FormGroup({});
  goal: Goal = new Goal();
  // targetDate: Date = new Date()
  constructor(private service: GoalApiService, private router: Router) { }

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
    this.service.save(this.newGoalForm.value).subscribe(resp =>{
      this.goal = resp;
      this.newGoalForm.reset();

    })
  }
}

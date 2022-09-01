import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalApiService } from '../goal-api.service';
import { Goal } from '../model/Goal';

@Component({
  selector: 'app-edit-goal',
  templateUrl: './edit-goal.component.html',
  styleUrls: ['./edit-goal.component.css']
})
export class EditGoalComponent implements OnInit {

  currentGoal = new Goal();
  editGoalForm: FormGroup = new FormGroup({
    id: new FormControl(''),
        name: new FormControl(''),
        description: new FormControl(''),
        image: new FormControl(''),
        targetDate: new FormControl(''),
        targetAmount: new FormControl(''),
        savedAmount: new FormControl(''),
  })

  get name() {
    return this.editGoalForm.get('name')
  }

  get description() {
    return this.editGoalForm.get('description')
  }

  get image() {
    return this.editGoalForm.get('image')
  }

  get targetDate() {
    return this.editGoalForm.get('date')
  }

  get targetAmount() {
    return this.editGoalForm.get('targetAmount')
  }

  get savedAmount() {
    return this.editGoalForm.get('savedAmount')
  }

  constructor(private service: GoalApiService, private router:Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params: any)=> {

      // Get the id of the current item and display it to the url
      this.service.findAll().subscribe((goalList) => {
        this.currentGoal = goalList.find((goal: { id: number; })=> {
          return goal.id === +params.get("id");
        });
  
        /** Autofill the editForm with the current values and all fields are required to fill
            excpet the image field and the itemNumber which we can not update it since it's unique
        */
        this.editGoalForm = new FormGroup({
          id: new FormControl(this.currentGoal.id),
          'name': new FormControl(this.currentGoal.name, Validators.required),
          'description': new FormControl(this.currentGoal.description, Validators.required),
          'image': new FormControl(this.currentGoal.image),
          'date': new FormControl(this.currentGoal.targetDate, Validators.required),
          'targetAmount': new FormControl(this.currentGoal.targetAmount, Validators.required),
          'savedAmount': new FormControl(this.currentGoal.savedAmount, Validators.required),
        });
  
      });
     })
  }

    edit(): void {
      console.log(this.editGoalForm.value);
      this.service.update(this.editGoalForm.value).subscribe(() => {});
      setTimeout(()=> {
        this.router.navigate(['/goals']);
      },50)

  }
}
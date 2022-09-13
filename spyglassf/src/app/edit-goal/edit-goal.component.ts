import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalApiService } from '../goal-api.service';
import { Goal } from '../model/Goal';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-goal',
  templateUrl: './edit-goal.component.html',
  styleUrls: ['./edit-goal.component.css']
})
export class EditGoalComponent implements OnInit {

  currentGoal = new Goal();
  user: number = 0;
  /** Autofill the editForm with the current values and all fields are required to fill
            excpet the image field and the itemNumber which we can not update it since it's unique
  */
  editGoalForm: FormGroup = new FormGroup({
    id: new FormControl(''),
        'name': new FormControl(''),
        'description': new FormControl(''),
        'image': new FormControl(''),
        'date': new FormControl(''),
        'targetAmount': new FormControl(''),
        'savedAmount': new FormControl(''),
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

  constructor(private service: GoalApiService, private router:Router, private _activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params: any)=> {

      // Get the id of the current goal and display it to the url
      this.service.findAll().subscribe((goalList) => {
        this.currentGoal = goalList.find((goal: { id: number; })=> {
          return goal.id === +params.get("id");
        });


        console.log(this.currentGoal.targetDate)
        console.log(this.currentGoal);
  
        
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
      let date = new Date(this.editGoalForm.value.date.year, this.editGoalForm.value.date.month -1, this.editGoalForm.value.date.day);
      this.currentGoal.name =this.editGoalForm.value.name;
      this.currentGoal.description =this.editGoalForm.value.description;
      this.currentGoal.image =this.editGoalForm.value.image;
      this.currentGoal.targetDate =date;
      this.currentGoal.targetAmount =this.editGoalForm.value.targetAmount;
      this.currentGoal.savedAmount =this.editGoalForm.value.savedAmount;
      console.log(this.currentGoal)
      this.service.update(this.currentGoal).subscribe(() => {});
      setTimeout(()=> {
        this.router.navigate(['/goals'], {queryParams: {user: this.userService.activeUser}});
      },50)

  }
  
  goToGoalList(){
    this.router.navigate(['/goals'], {queryParams: {user: this.userService.activeUser}})
  }
}

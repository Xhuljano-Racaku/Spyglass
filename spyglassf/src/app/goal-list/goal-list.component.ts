import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoalApiService } from '../goal-api.service';
import { Goal } from '../model/Goal';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

  constructor(private service: GoalApiService, private router: Router) { }

  goalList?: Goal[];
  ngOnInit(): void {
    this.service.findAll().subscribe((data) => {
      this.goalList = data;
    })
  }

  deleteGoal(id: number) {
    let confirmation = confirm("Are you sure you want to delete this item?");

    if(confirmation) {
      this.service.delete(id).subscribe(()=> {
        this.goalList = this.goalList?.filter((goal)=> goal.id != id);
      })
    }
  }

  editGoal(id: number) {
    this.router.navigate([`/edit`, id]);
  }

}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalApiService } from '../goal-api.service';
import { Goal } from '../model/Goal';
import {MatSort, Sort} from '@angular/material/sort';
import { UserService } from '../user.service';


@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

  constructor(private service: GoalApiService, private router: Router, private route: ActivatedRoute, private userService : UserService) { }

  user: number = 0
  goalList?: Goal[];
  displayedColumns: string[] = ['id', 'name', 'description', 'image', 'date', 'progress', 'actions']
  ngOnInit(): void {
    this.userService.setIsAuthenticated(true);
    this.route.queryParams.subscribe(params => {
      this.user = params['user']
      console.log(this.user)
      
      let currentUser = sessionStorage.getItem('user');
      if(currentUser != this.user.toString()){
        this.router.navigate(['/login']);
      }else {
        this.service.findByUser(params['user']).subscribe(resp =>{
          this.goalList = resp
        })
      }
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

  sortData(sort: Sort) {
    const data = this.goalList.slice();
    if (!sort.active || sort.direction === '') {
      this.goalList = data;
      return;
    }

    this.goalList = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
          case 'date':
            return compare(a.targetDate, b.targetDate, isAsc);
        default:
          return 0;
      }
    });
  }
  
}
function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

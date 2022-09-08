import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditGoalComponent } from './edit-goal/edit-goal.component';
import { ErrorComponent } from './error/error.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { LoginComponent } from './login/login.component';
import { NewGoalComponent } from './new-goal/new-goal.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
  path: 'register', component: SignupComponent
  },
  {
  path: 'login', component: LoginComponent
  },
  {
  path: '', component: LoginComponent
  },
  {
    path: 'goals', component: GoalListComponent
  },
  {
    path: 'add', component: NewGoalComponent
  },
  {
    path: 'edit/:id', component: EditGoalComponent
  },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

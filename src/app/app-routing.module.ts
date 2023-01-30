import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/pagenotfound/page-not-found/page-not-found.component';
import { StudentComponent } from './components/students/student/student.component';
import { UserComponent } from './components/users/user/user.component';

const routes: Routes = [
  {path:'UserIndex',component:UserComponent},
  {path:'StudentIndex',component:StudentComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

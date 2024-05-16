import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user list/user-list/user-list.component';
import { UserDetailsComponent } from './user details/user-details/user-details.component';

const routes: Routes = [
  { path: "", redirectTo: `/UserList`, pathMatch: 'full' },
  { path: "UserList", component: UserListComponent },
  { path: "UserList/:id", component: UserDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

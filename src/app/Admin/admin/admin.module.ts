import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { FilmsComponent } from './films/films.component';
import { RouterModule, Routes } from '@angular/router'; //thư viện routing trong angular
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxPaginationModule } from "ngx-pagination";
import { EditFilmComponent } from './films/edit-film/edit-film.component';
import { ModalUserComponent } from './users/modal-user/modal-user.component';

const adminRoutes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'users-management', component: UsersComponent },
      { path: 'films-management', component: FilmsComponent },
      

    ]
  }

]

@NgModule({
  declarations: [AdminComponent, UsersComponent, FilmsComponent, DashboardComponent, EditFilmComponent, ModalUserComponent],
  imports: [
    CommonModule, RouterModule.forChild(adminRoutes),
    FormsModule, NgxPaginationModule
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { FilmsComponent } from './films/films.component';
import { RouterModule, Routes } from '@angular/router'; //thư viện routing trong angular
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxPaginationModule } from "ngx-pagination";

import { ModalUserComponent } from './users/modal-user/modal-user.component';
import { ModalFilmComponent } from './films/modal-film/modal-film.component';
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { DROPZONE_CONFIG } from "ngx-dropzone-wrapper";
import { DropzoneConfigInterface } from "ngx-dropzone-wrapper";
import { NewsletterComponent } from './newsletter/newsletter.component';

const adminRoutes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'users-management', component: UsersComponent },
      { path: 'films-management', component: FilmsComponent },
      { path: 'newsletter', component: NewsletterComponent}

    ]
  }

]
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: "https://httpbin.org/post",
  maxFilesize: 50,
  acceptedFiles: "image/*",
  //dictFallbackMessage: "drop here"
};

@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    FilmsComponent,
    DashboardComponent,
    ModalUserComponent,
    ModalFilmComponent,
    NewsletterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
    NgxPaginationModule,
    DropzoneModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
    DatePipe
  ]
})
export class AdminModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientLayoutModule } from './Client/client-layout/client-layout.module';
import { BookingPageComponent } from './Client/booking-page/booking-page.component';
import { CheckLoginGuard } from 'src/app/_core/guards/check-login.guard';
import { Page404Component } from './Client/page404/page404.component';
import { Page403Component } from './Client/page403/page403.component';
import { AdminModule } from './Admin/admin/admin.module';
import { CheckAdminGuard } from './_core/guards/check-admin.guard';

const routes: Routes = [
  { path: "", loadChildren: () => ClientLayoutModule },
  { path: "home", loadChildren: () => ClientLayoutModule },
  { path: "admin", loadChildren: () => AdminModule, canActivate: [CheckAdminGuard] },
  { path: 'booking/:showtimeid', component: BookingPageComponent, canActivate: [CheckLoginGuard] },
  { path: 'page403', component: Page403Component },
  { path: "**", component: Page404Component }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

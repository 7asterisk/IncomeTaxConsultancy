import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AuthGuard } from './auth-guard.service';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ShowModelComponent } from './show-model/show-model.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'addCustomer', component: AddcustomerComponent, canActivate: [AuthGuard] },
  { path: 'editCustomer', component: EditcustomerComponent, canActivate: [AuthGuard] },
  { path: 'showData', component: ShowModelComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

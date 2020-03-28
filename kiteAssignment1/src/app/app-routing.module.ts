import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DeactivateGuardService } from './deactivate-guard.service';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canDeactivate: [DeactivateGuardService]
  },
  {
    path: 'home/fruits',
    component: HomeComponent,
    canDeactivate: [DeactivateGuardService]
  },
  {
    path: 'home/vegetables',
    component: HomeComponent,
    canDeactivate: [DeactivateGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

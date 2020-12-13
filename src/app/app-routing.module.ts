import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from '../app/components/auth/auth.component';
import { HomeComponent } from '../app/components/home/home.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { AdminComponent } from '../app/modules/admin/admin.component';
import {DashbordComponent} from './modules/dashbord/dashbord.component';
import {DefaultComponent} from './layouts/default/default.component';


const routes: Routes = [
  { path: '', redirectTo: '/default', pathMatch: 'full' },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'accueil',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'default',
    component: DefaultComponent,
    children: [{
      path: 'dashbord',
      component: DashbordComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

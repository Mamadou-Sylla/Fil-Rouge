import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import {DashbordComponent} from '../../modules/dashbord/dashbord.component';
import {RouterModule} from '@angular/router';
import {AdminComponent} from '../../modules/admin/admin.component';




@NgModule({
  declarations: [
    DefaultComponent,
    DashbordComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class DefaultModule { }

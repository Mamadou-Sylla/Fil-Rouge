import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import {DashbordComponent} from '../../modules/dashbord/dashbord.component';
import {RouterModule} from '@angular/router';
import {AdminComponent} from '../../modules/admin/admin.component';
import {SharedModule} from '../../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';





@NgModule({
  declarations: [
    DefaultComponent,
    DashbordComponent,
    AdminComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        MatSidenavModule,
        MatDividerModule,
        MatPaginatorModule,
        MatTableModule,
        MatIconModule,
        MatFormFieldModule
    ]
})
export class DefaultModule { }

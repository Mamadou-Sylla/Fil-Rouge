import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import { MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule} from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { ProfileComponent } from './profile/profile.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { PostUserComponent } from './components/post-user/post-user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProfileComponent,
    PostUserComponent,
  ],
    imports: [
        CommonModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        FlexModule,
        MatMenuModule,
        MatListModule,
        RouterModule,
        MatPaginatorModule,
        MatTableModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatDialogModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        ProfileComponent,
    ]
})
export class SharedModule { }

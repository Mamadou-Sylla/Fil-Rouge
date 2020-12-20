import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import { UserModel} from '../../../models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currentUser = UserModel;
  constructor( public Authservices: AuthService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  UserConnect()
  {
    console.log(this.currentUser);
  }
}

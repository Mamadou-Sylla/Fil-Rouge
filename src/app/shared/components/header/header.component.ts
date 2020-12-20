import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private auth: AuthService) { }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }
  // tslint:disable-next-line:typedef
  Disconnect(){
    this.auth.logout();
  }

}

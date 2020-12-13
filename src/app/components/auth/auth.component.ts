import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  hide = true;
  userForm: any = {};
  userData = {
    email: '',
    password: ''
  };
  tokenUser: any;
  constructor(private http: HttpClient ,
              public Authservices: AuthService,
              private router: Router) {}


  ngOnInit(): void {
    this.userForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      }
    );
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
   this.userData.email=this.userForm.email;
    this.userData.password=this.userForm.password;
    this.Authservices.getToken(this.userData);
    this.tokenUser=this.Authservices.decodeToken();
//    console.log(this.tokenUser.roles[0]);
      this.Authservices.redirectByRole(this.tokenUser.roles[0]);

  }
}

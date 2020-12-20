import { Component, OnInit } from '@angular/core';
import {MyErrorStateMatcher} from '../../../components/auth/auth.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';
import {MatDialogConfig} from '@angular/material/dialog';
import {UserModel} from '../../../models/user.model';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.scss']
})

export class PostUserComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
  userPost: any = {};
  hide = true;
  userData = {
    prenom: '',
    nom: '',
    email: '',
    password: '',
    cpassword: '',
    telephone: ''
  };
  // @ts-ignore
   poster = new UserModel();
  constructor(private http: HttpClient ,
              public Authservices: AuthService,
              private router: Router) {
    /* this.http.post('http://127.0.0.1:8000/api/admin/formateurs').subscribe(
      res => {
      this.Authservices.OnSubmit(this.userData);
        console.log(res);
      },
      error => console.log(error)
    );*/
  }

  ngOnInit(): void {
    this.userPost = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      }
    );
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.userData.prenom = this.userPost.prenom;
    this.userData.nom = this.userPost.nom;
    this.userData.email = this.userPost.email;
    this.userData.password = this.userPost.password;
    this.userData.telephone = this.userPost.telephone;
    this.userData.cpassword = this.userPost.cpassword;
    if (this.userData.password !== this.userData.cpassword)
    {
      console.log('confirmation invalid');
      swal({
        title: 'Erreur',
        text: 'Echec de la confirmation du password',
        icon: 'error',
        // @ts-ignore
        button: 'ok',
      });
    }
    console.log(this.poster.firstName = this.userPost.prenom);
  }
  // tslint:disable-next-line:typedef
  onClose()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
  }

}

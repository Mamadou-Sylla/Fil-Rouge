
import { Component, OnInit, enableProdMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myForm: any = {};
  Url = 'http://localhost:4200/register';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.get();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.insert({prenom: this.myForm.prenom, nom: this.myForm.nom,
      email : this.myForm.email, password: this.myForm.password, telephone: this.myForm.telephone });
  }

  // tslint:disable-next-line:typedef
  insert(user: any)
  {
    this.http.post(this.Url, user).subscribe(data => {
        console.log(data);
        return data;
    },
      err => {

      });
  }

  get()
  {
    this.http.get(this.Url).subscribe(data => {
      return data;
    },
      err => {

      });
  }

}

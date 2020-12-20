export class UserModel{

   id: number;
   firstName: string;
   lastName: string;
   email: string;
   telephone: string;
   etat: boolean;
   token: string;

  constructor(id: number,
              firstName: string,
              lastName: string,
              email: string,
              telephone: string,
              etat: boolean,
              token: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.telephone = telephone;
    this.etat = etat;
    this.token = token;


  }

}

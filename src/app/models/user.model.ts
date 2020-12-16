export class UserModel{

   id: number;
   firstName: string;
   lastName: string;
   email: string;
   type: string;
   token: string;

  constructor(id: number,
              firstName: string,
              lastName: string,
              email: string,
              type: string,
              token: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
    this.token = token;


  }

}

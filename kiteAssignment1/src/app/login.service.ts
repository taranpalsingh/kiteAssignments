import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  loginVerify(credentials){

    if(credentials.username === "johndoe" && credentials.password === "kite.Work5"){
      return of({
        authenticated: true,
        message:"Correct credentials."});
    }
    else{
      return of({
        authenticated: false,
        message: "Incorrect credentials."
      });
      // return throwError("Incorrect credentials.")
    }
  }
}

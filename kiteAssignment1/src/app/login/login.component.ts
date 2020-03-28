import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router, NavigationStart } from '@angular/router';
import { UsernameValidators } from './username.validator';
import { LoginService } from '../login.service';
import { PasswordValidators } from './password.validator';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  isSignup: Boolean = false;
  loginResMessage: String;
  showPassword: Boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router  
  ) { }

  ngOnInit() {
  }

  loginFormGroup = new FormGroup({
    username: new FormControl(
      "",
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
        // For the validation of : Only lowercase alphabets and numbers are allowed. 
        UsernameValidators.otherCases 
      ]
    ),
    password: new FormControl(
      "",
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
        // For the validation of : Must contain atleast one lowercase alphabet, one uppercase alphabet, one number and one special character.
        PasswordValidators.strong  
      ]
    )    
  }, {updateOn: 'submit'});   // to update this validation on submit   


  get username(){
    return this.loginFormGroup.get('username');
  }

  get password(){
    return this.loginFormGroup.get('password');
  }

  submitForm() {

    if(this.loginFormGroup.valid){
      let credentials = {
        username: this.loginFormGroup.get('username').value,
        password: this.loginFormGroup.get('password').value,
      }

      // calling the service to verify login credentials
      this.loginService.loginVerify(credentials)
      .subscribe((res) =>{

        // If the credentials are correct
        if(res.authenticated){
          this.router.navigateByUrl("/home");
          this.loginResMessage = "";
        }
        // If the credentials are Incorrect
        else{
          console.log(res.message);
          this.loginResMessage = res.message;
        }
      },(err) => {
        // This would not happen in our case since we are not calling any external API.
        alert(err);
      })
    }
  }
}

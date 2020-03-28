import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static strong(control: AbstractControl) : ValidationErrors | null {

        const hasNumber = /\d/.test(control.value);
        const hasUpper = /[A-Z]/.test(control.value);
        const hasLower = /[a-z]/.test(control.value);
        const hasSpecial = /\W/.test(control.value);
        
        const valid = hasNumber && hasUpper && hasLower && hasSpecial;
        
        // If the password doesn't meets all our requirements, It is !valid. 
        // and hence we return the status "strong" as true
        // which means that we do have an error 
        if(!valid){
            return {strong: true};
        }

        // Otherwise, we just return null.
        return null;
    }
}
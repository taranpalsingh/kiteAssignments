import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static otherCases(control: AbstractControl) : ValidationErrors | null {
        
        const isLower = (control.value === String(control.value).toLowerCase()); 
        const hasSpecial = /\W|_/.test(control.value);
        
        if(!hasSpecial && isLower){
            // when value only contains lowerCase and no special character 
            // which means there is no error.
            return null;
        }    
        
        // Otherwise, the error is true.
        else{
            return { otherCases: true }
        }
    }
}
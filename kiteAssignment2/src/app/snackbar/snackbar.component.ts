import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent{

  timeDuration = 2;
  message = "Snackbar works.."
  action = "Great!"

  constructor(
    private _snackbar: MatSnackBar
  ) { }

  openSnackbar(){
    this._snackbar.open(this.message, this.action, {
      duration: this.timeDuration*1000,
      verticalPosition: 'bottom'
    });
  }


}

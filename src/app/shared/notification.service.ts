import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;

  constructor(private _snackBar: MatSnackBar) { }

  // Function that opens a snack bar with a notification to the user
  openSnackBar(message: string, horizont?: any, vertical?: any, classBar?: string) {
    horizont ? this.horizontalPosition = horizont : this.horizontalPosition = 'center'
    vertical ? this.verticalPosition = vertical : this.verticalPosition = 'top'
    this._snackBar.open(message,
      'close', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: classBar
      });
  }
}

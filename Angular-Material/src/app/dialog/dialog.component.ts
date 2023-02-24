import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(public dialog: MatDialog) { }

  public openDialog() {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      data: 'DataTest',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '2000ms'
    });
    dialogRef.afterClosed().subscribe(
      result => {
        console.log('Result = ', result)
      }
    )
  }

}

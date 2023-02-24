import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent {
  constructor(public matDialogRef: MatDialogRef<DialogModalComponent>) { }

  public closeDialog() {
    this.matDialogRef.close();
  }
}

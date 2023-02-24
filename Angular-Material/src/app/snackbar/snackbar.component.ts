import { SnackbarMsnComponent } from './snackbar-msn/snackbar-msn.component';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    // this.snackbar.open('Teste SnackBar', 'Close', {
    //   duration: 2000
    // })
  }

  public openSnackBar() {
    const snackbar = this.snackbar.open('Teste SnackBar', 'Close')
    snackbar.afterDismissed().subscribe(_ => {
      console.log('afterDismissed')
    })
    snackbar.onAction().subscribe(_ => {
      console.log('Ação aconteceu - Interação')
    })
  }

  public openFromComp() {
    this.snackbar.openFromComponent(SnackbarMsnComponent, {
      data: 'Teste SnackBar Comp',
      duration: 2000
    })
  }

}

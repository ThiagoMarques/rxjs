import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /* !: pode ser nulo ou não */
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  showFiller = false;
  constructor(private breakpoint: BreakpointObserver) { }

  ngAfterContentInit(): void {
    this.breakpoint.observe(['(max-width: 800px)']).subscribe({
      next: (res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      }
    })

  }
}

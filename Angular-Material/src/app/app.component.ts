import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSmallScreen = false;
  constructor(private breakpoint: BreakpointObserver) { }

  ngAfterContentInit(): void {
    /* Trabalhando com operador do RxJS para eliminar if - subscribe direto*/
    this.breakpoint.observe(['(max-width: 800px)']).subscribe((res) => this.isSmallScreen = res.matches)
  }

  get sideNavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}

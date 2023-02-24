import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isSmallScreen = false;
  public popText = false;
  public applyShadow = false;

  constructor(private breakpoint: BreakpointObserver) { }

  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER);
    console.log(content[0])
    fromEvent(content[0], 'scroll')
      /* Uso do pipe para evitar pegar o retorno do subscribe */
      .pipe(
        map(() => content[0].scrollTop)
      )
      .subscribe({
        /* Resultado do map é passado para next */
        next: (value) => this.determineHeader(value)
      })
  }
  /* top: distância do topo */
  determineHeader(top: number) {
    this.popText = top >= TEXT_LIMIT;
    this.applyShadow = top >= SHADOW_LIMIT
  }

  ngAfterContentInit(): void {
    /* Trabalhando com operador do RxJS para eliminar if - subscribe direto*/
    this.breakpoint.observe(['(max-width: 800px)']).subscribe((res) => this.isSmallScreen = res.matches)
  }

  get sideNavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}

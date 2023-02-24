import { Component, OnInit } from '@angular/core';
import { interval, map, takeWhile } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  public loadingPercent = 50

  constructor() { }

  ngOnInit() {
    this.loadingProgress(500).subscribe(i => this.loadingPercent = i)
  }

  loadingProgress(speed: number) {
    /* interval: Função parecida com setTimeOut */
    return interval(speed).pipe(
      map(i => i * 5),
      /* Realiza a desinscrição assim que o i for menor ou igual a 100 */
      takeWhile(i => i <= 100)
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { concat, interval, map, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  public loadingPercent = 50
  public queryValue = 0
  public bufferValue = 0
  public queryMode: ProgressBarMode = 'query'
  public currentPlayback = 0

  constructor() { }

  ngOnInit() {
    this.loadingProgress(250).subscribe(i => this.currentPlayback = i)
    this.loadingProgress(500).subscribe(i => this.loadingPercent = i)
    /* Concat - Executa o primeiro observable depois o segundo*/
    concat(
      interval(2000).
        pipe(
          /* Só deve pegar os 'dois segundos' uma vez */
          take(1),
          /*  */
          tap(_ => (this.queryMode = 'determinate'))
        ),
      this.loadingProgress(500)
    ).subscribe(i => this.queryValue = i)
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

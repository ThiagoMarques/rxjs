import { Platform } from '@angular/cdk/platform';
import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  public startDate = new Date(2023, 1, 1);
  public minDate = new Date(2023, 0, 1);
  public maxDate = new Date(2023, 2, 31);

  constructor(private plataform: Platform) { }

  get isTouchDevice() {
    return this.plataform.ANDROID || this.plataform.IOS;
  }

}
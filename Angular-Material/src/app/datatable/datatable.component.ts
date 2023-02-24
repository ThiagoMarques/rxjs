import { DATA_MOVIES } from './model/data-movies';
import { Component } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {
  public dataSource = DATA_MOVIES

}

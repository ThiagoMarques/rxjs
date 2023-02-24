import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatMomentDateModule } from '@angular/material-moment-adapter'

@NgModule({
  exports: [
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatSnackBarModule
  ],
  declarations: [],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline', floatLabel: 'always' } },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
    {
      provide: MAT_SNACK_BAR_DATA, useValue: {
        duration: 2500,

      }
    }
  ]
})
export class MaterialModule { }

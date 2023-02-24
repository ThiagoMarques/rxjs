import { DatatableComponent } from './datatable/datatable.component';
import { DialogComponent } from './dialog/dialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TabsComponent } from './tabs/tabs.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'buttonIcon', component: ButtonsIconsComponent },
  { path: 'formFieldInput', component: FormFieldInputComponent },
  { path: 'progressSpinner', component: ProgressSpinnerComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'datatable', component: DatatableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

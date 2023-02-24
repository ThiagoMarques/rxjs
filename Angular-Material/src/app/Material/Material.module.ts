import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  exports: [MatSlideToggleModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatInputModule],
  declarations: []
})
export class MaterialModule { }

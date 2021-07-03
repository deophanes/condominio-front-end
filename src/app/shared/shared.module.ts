import { NgModule } from '@angular/core';
import { PageTitleComponent } from './componente/page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { PageDialogComponent } from './componente/page-dialog/page-dialog.component';

@NgModule({
  declarations: [
    PageTitleComponent,
    PageDialogComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    PageTitleComponent,
    PageDialogComponent
  ]
})

export class SharedModule { }

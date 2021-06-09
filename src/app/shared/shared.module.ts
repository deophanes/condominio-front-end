import { NgModule } from '@angular/core';
import { PageTitleComponent } from './componente/page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    PageTitleComponent
  ]
})

export class SharedModule { }

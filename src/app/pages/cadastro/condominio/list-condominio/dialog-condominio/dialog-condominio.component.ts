import { Component, OnInit, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-condominio',
  templateUrl: './dialog-condominio.component.html',
  styleUrls: ['./dialog-condominio.component.scss']
})
export class DialogCondominioComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}

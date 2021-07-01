import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-page-dialog',
  templateUrl: './page-dialog.component.html',
  styleUrls: ['./page-dialog.component.scss']
})
export class PageDialogComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  afterClosed() {
    let dialogRef =  this.dialog.open(PageDialogComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        if (result === 'True') {
          this.snackBar.open(
            'Registro Excluido com Sucesso!', 'Ok',
            {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['snackBar-success']
            }
          );
        }
      }
    );
  }

}

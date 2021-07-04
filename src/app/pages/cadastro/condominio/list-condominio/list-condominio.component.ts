import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogCondominioComponent } from './dialog-condominio/dialog-condominio.component';
import { Condominio } from '../shared/condominio/condominio.model';
import { CondominioService } from '../shared/condominio/condominio.service';

@Component({
  selector: 'app-list-condominio',
  templateUrl: './list-condominio.component.html',
  styleUrls: ['./list-condominio.component.css']
})

export class ListCondominioComponent implements OnInit {

  condominio: Condominio[];
  mensagemErro: string;
  displayedColumns: string[] = ['codCon', 'desCon', 'coCnpj', 'cidCon', 'estCon', 'ACAO'];
  dataSource: MatTableDataSource<Condominio>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private service: CondominioService
  ) { }

  ngOnInit(): void {
    this.service.findAll().
    subscribe(
      response => {
        this.dataSource = new MatTableDataSource(response);
      },
      erro => this.mensagemErro = 'Ocorreu um erro ao deletar o cliente.'
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  novo() {
    this.router.navigate(['condominio/novo']);
  }

  editar() {
    this.router.navigate(['condominio/novo']);
  }

  deletar() {
    let dialogRef =  this.dialog.open(DialogCondominioComponent);
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

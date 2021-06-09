import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Condominio } from '../shared/condominio.model';

const ELEMENT_DATA: Condominio[] = [

  {CON_CODCON: 1, CON_DESCON: 'MORADA DOS ORIXAS', CON_COCNPJ: '11111111111111', CON_CIDCON: 'TERESINA', CON_ESTCON: 'PI'},
  {CON_CODCON: 2, CON_DESCON: 'ED. RAFAELA DUARTE', CON_COCNPJ: '22222222222222', CON_CIDCON: 'JABOATAO DOS GUARARAPES', CON_ESTCON: 'PE'},
  {CON_CODCON: 3, CON_DESCON: 'FLAMBOYANT', CON_COCNPJ: '33333333333333', CON_CIDCON: 'RECIFE', CON_ESTCON: 'PE'}

];

@Component({
  selector: 'app-list-condominio',
  templateUrl: './list-condominio.component.html',
  styleUrls: ['./list-condominio.component.css']
})

export class ListCondominioComponent implements OnInit {

  displayedColumns: string[] = ['CON_CODCON', 'CON_DESCON', 'CON_COCNPJ', 'CON_CIDCON', 'CON_ESTCON', 'ACAO'];
  dataSource = new MatTableDataSource( ELEMENT_DATA );

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private router: Router ) {
     // Create 100 users
     //const condominios = Array.from({length: 100}, (_, k) => createNew(k + 1));
     // Assign the data to the data source for the table to render
     //this.dataSource = new MatTableDataSource(condominios);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  novo() {
    this.router.navigate(['condominio/novo']);
  }

}

function createNew(id: number): Condominio {

  return
}

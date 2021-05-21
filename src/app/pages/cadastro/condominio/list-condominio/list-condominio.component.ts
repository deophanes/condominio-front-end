import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-condominio',
  templateUrl: './list-condominio.component.html',
  styleUrls: ['./list-condominio.component.css']
})

export class ListCondominioComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  novo() {
    this.router.navigate(['condominio/novo']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-condominio',
  templateUrl: './form-condominio.component.html',
  styleUrls: ['./form-condominio.component.css']
})
export class FormCondominioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(['condominio']);
  }

}

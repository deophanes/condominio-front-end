import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CondominioService } from '../shared/condominio.service';

@Component({
  selector: 'app-form-condominio',
  templateUrl: './form-condominio.component.html',
  styleUrls: ['./form-condominio.component.css']
})
export class FormCondominioComponent implements OnInit {

  formGroup: FormGroup;
  estados: any[] = ['MA', 'PI', 'PE'];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: CondominioService) { }

  gravar() {
    console.log('Valor do Formulário');
    console.log(this.formGroup.value);
    this.voltar();
  }

  editar() {
    this.router.navigate(['condominio/novo']);
  }
  deletar() {
    console.log('Valor do Formulário');
    console.log(this.formGroup.value);
    this.voltar();
  }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({

      CON_CODCON: [null],
      CON_DESCON: [null, [ Validators.required, Validators.maxLength(50) ] ],
      CON_ENDCON: [null, [ Validators.required, Validators.maxLength(50) ] ],
      CON_COMEND: [null, [ Validators.maxLength(30) ] ],
      CON_BAICON: [null, [ Validators.required, Validators.maxLength(50) ] ],
      CON_CIDCON: [null, [ Validators.required, Validators.maxLength(50) ] ],
      CON_ESTCON: [null, [ Validators.required, Validators.maxLength(2) ] ],
      CON_CEPCON: [null, [ Validators.required, Validators.maxLength(10) ] ],
      CON_FLGVOZ: [null ],
      CON_COCNPJ: [null, [ Validators.required, Validators.maxLength(14) ] ],

    })
  }

  voltar() {
    this.router.navigate(['condominio']);
  }

}

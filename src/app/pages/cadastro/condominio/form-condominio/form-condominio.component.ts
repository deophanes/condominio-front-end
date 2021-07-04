import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CondominioService } from '../shared/condominio/condominio.service';
import { Condominio } from '../shared/condominio/condominio.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-condominio',
  templateUrl: './form-condominio.component.html',
  styleUrls: ['./form-condominio.component.css']
})
export class FormCondominioComponent implements OnInit {

  formGroup: FormGroup;
  estados: any[] = ['MA', 'PI', 'PE'];
  condominio: Condominio;
  success: boolean = false;
  errors: String[];


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: CondominioService,
    private snackBar: MatSnackBar) { }

  gravar(): void {
    console.log(this.formGroup.value);
    const fomrValues = this.formGroup.value;
    this.condominio = new Condominio(
      fomrValues.desCon,
      fomrValues.endCon,
      fomrValues.comEnd,
      fomrValues.baiCon,
      fomrValues.cidCon,
      fomrValues.estCon,
      fomrValues.cepCon,
      fomrValues.flgVoz,
      fomrValues.coCnpj
    )
    this.service.insert(this.condominio)
      .subscribe(
        response => {
          console.log(response);
          this.success = true;
        }, errorResponse => {
          this.errors = errorResponse.error.erros;
        }
      )
    this.voltar();

    this.snackBar.open(
      'Registro Incluido com Sucesso!', 'Ok',
      {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['snackBar-success']
      }
    );
  }

  editar(): void {
    this.router.navigate(['condominio/novo']);
  }
  deletar(): void {
    console.log('Valor do Formulário');
    console.log(this.formGroup.value);
    this.voltar();
  }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({

      codCon: [null],
      desCon: [null, [ Validators.required, Validators.maxLength(50) ] ],
      endCon: [null, [ Validators.required, Validators.maxLength(50) ] ],
      comEnd: [null, [ Validators.maxLength(30) ] ],
      baiCon: [null, [ Validators.required, Validators.maxLength(50) ] ],
      cidCon: [null, [ Validators.required, Validators.maxLength(50) ] ],
      estCon: [null, [ Validators.required, Validators.maxLength(2) ] ],
      cepCon: [null, [ Validators.required, Validators.maxLength(10) ] ],
      flgVoz: [null ],
      coCnpj: [null, [ Validators.required, Validators.maxLength(14) ] ],
    });
  }

  voltar(): void {
    this.router.navigate(['condominio']);
  }

}

import { Injectable } from '@angular/core';
import { Condominio } from './condominio.model';

@Injectable({
  providedIn: 'root'
})

export class CondominioService {

constructor() { }


  getCondominio(): Condominio {
    let c: Condominio = new Condominio();
    c.CON_DESCON = 'CONDOMINIO JAMBALAIA';
    c.CON_COCNPJ = '12345678901234';
    c.CON_CEPCON = '54430160';
    c.CON_ENDCON = 'RUA AMAMBAI';
    c.CON_COMEND = 'APTO 101';
    c.CON_BAICON = 'PIEDADE';
    c.CON_CIDCON = 'JABOATAO DOS GUARARAPES';
    c.CON_ESTCON = 'PE';

    return c;

  }
}

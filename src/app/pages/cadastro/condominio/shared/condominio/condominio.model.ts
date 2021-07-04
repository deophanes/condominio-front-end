export class Condominio {

  public codCon?: number;
  public desCon?: string;
  public endCon?: string;
  public comEnd?: string;
  public baiCon?: string;
  public cidCon?: string;
  public estCon?: string;
  public cepCon?: string;
  public flgVoz?: string;
  public coCnpj?: string;

    constructor(desCon: string, endCon: string, comEnd: string, baiCon: string,
                cidCon: string, estCon: string, cepCon: string, flgVoz: string,
                coCnpj: string) {
      this.desCon = desCon;
      this.endCon = endCon;
      this.comEnd = comEnd;
      this.baiCon = baiCon;
      this.cidCon = cidCon;
      this.estCon = estCon;
      this.cepCon = cepCon;
      this.flgVoz = 'N';
      this.coCnpj = coCnpj;
    }
  }

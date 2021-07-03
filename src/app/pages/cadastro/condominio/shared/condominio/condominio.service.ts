import { Injectable } from '@angular/core';
import { Condominio } from './condominio.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CondominioService {

  apiURL: string = environment.apiURLBase + '/condominio';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Condominio[]> {
    return this.http.get<Condominio[]>(this.apiURL);
  }

  findById(id: number): Observable<Condominio> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  insert(condominio: Condominio): Observable<Condominio> {
    return this.http.post<Condominio>(this.apiURL, condominio);
  }

  update(condominio: Condominio): Observable<any> {
    return this.http.put<Condominio>(
      `${this.apiURL}/${condominio.codCon}`,
      condominio
    );
  }

  delete(condominio: Condominio): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${condominio.codCon}`);
  }
}

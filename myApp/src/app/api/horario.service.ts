import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Horario } from '../models/horario';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private baseUrl = 'https://hisigns-production.up.railway.app';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Horario[]> {
    return this.http.get<Horario[]>(`${this.baseUrl}/horario/lista`);
  }

  get(id: string): Observable<Horario> {
    return this.http.get<Horario>(`${this.baseUrl}/horario/${id}`);
  }

  create(horario: Horario): Observable<any> {
    return this.http.post(`${this.baseUrl}/horario/incluir`, horario, { responseType: 'text' as 'json' });
  }


  update(horario: Horario): Observable<any> {
    return this.http.put(`${this.baseUrl}/horario/${horario.id}/alterar`, horario).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 200) {
          return of('Horário alterado com sucesso!');
        }
        return throwError(error);
      })
    );
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/horario/${id}/excluir`);
  }

}

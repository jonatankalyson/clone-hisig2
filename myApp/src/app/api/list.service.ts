import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_CONFIG } from '../config/api.config';
import { Horario } from '../models/horario';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private testeData: any;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Horario[]> {
    return this.http.get<Horario[]>(`${API_CONFIG.baseUrl}/horario/lista`)
      .pipe(
        catchError(error => {
          console.error('Ocorreu um erro ao buscar os horários', error);
          return throwError(error);
        })
      );
  }

  update(horario: Horario): Observable<Horario> {
    return this.http.put<Horario>(`${API_CONFIG.baseUrl}/horario/${ horario.id }/alterar`, horario);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${API_CONFIG.baseUrl}/horario/${id}/excluir`, { responseType: 'text' })
      .pipe(
        tap(() => console.log('Horário apagado com sucesso'))
      );
  }

  setTesteData(data: any) {
    this.testeData = data;
  }

  getTesteData() {
    return this.testeData;
  }
}

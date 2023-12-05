import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Exercicio } from '../models/exercicio';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';

interface UploadData {
  file_data: Array<number>;
  file_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExercicioService {
  private baseUrl = 'https://hisigns-production.up.railway.app';
  private testeListSubject: BehaviorSubject<Exercicio[]> = new BehaviorSubject<Exercicio[]>([]);
  testeList$: Observable<Exercicio[]> = this.testeListSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getExercicios();
  }

  getExercicios(): void {
    this.http.get<Exercicio[]>(`${this.baseUrl}/exercicio/lista`).subscribe(exercicios => {
      this.testeListSubject.next(exercicios);
    });
  }

  addExercicio(exercicio: Exercicio): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/exercicio/incluir`, exercicio, { responseType: 'text' as 'json' }).pipe(
      tap((responseText) => {
        console.log("Response from server:", responseText);
        this.getExercicios();
      })
    );
}

  updateExercicio(id: string, exercicio: Exercicio): Observable<Exercicio> {
    return this.http.put<Exercicio>(`${this.baseUrl}/exercicio/${id}/alterar`, exercicio).pipe(
      tap(() => {
        this.getExercicios();
      })
    );
  }

  deleteExercicio(id: string): Observable<string> {
    return this.http.delete(`${this.baseUrl}/exercicio/${id}/excluir`, { responseType: 'text' }).pipe(
      tap(() => {
        this.getExercicios();
      })
    );
  }

  downloadPdf(id: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/exercicio/${id}/downloadpdf`, { responseType: 'blob' });
  }

  uploadPdf(uploadData: UploadData, id: string): Observable<any> {
    const url = `${this.baseUrl}/exercicio/${id}/uploadpdf`;
    const formData = new FormData();
    const blob = new Blob([new Uint8Array(uploadData.file_data)]);
    formData.append('file', blob, uploadData.file_name);
    return this.http.post(url, formData).pipe(
      tap(() => {
        this.getExercicios();
      })
    );
  }
}
//teste
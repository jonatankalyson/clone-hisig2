import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Teste } from './../models/teste';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';

interface UploadData {
  file_data: Array<number>;
  file_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TesteService {
  private baseUrl = 'https://hisigns-production.up.railway.app';
  private testeListSubject: BehaviorSubject<Teste[]> = new BehaviorSubject<Teste[]>([]);
  testeList$: Observable<Teste[]> = this.testeListSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getTestes();
  }

  getTestes(): void {
    this.http.get<Teste[]>(`${this.baseUrl}/teste/lista`).subscribe(testes => {
      this.testeListSubject.next(testes);
    });
  }

  addTeste(teste: Teste): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/teste/incluir`, teste, { responseType: 'text' as 'json' }).pipe(
      tap((responseText) => {
        console.log("Response from server:", responseText);
        this.getTestes();
      })
    );
}

  updateTeste(id: string, teste: Teste): Observable<Teste> {
    return this.http.put<Teste>(`${this.baseUrl}/teste/${id}/alterar`, teste).pipe(
      tap(() => {
        this.getTestes();
      })
    );
  }

  deleteTeste(id: string): Observable<string> {
    return this.http.delete(`${this.baseUrl}/teste/${id}/excluir`, { responseType: 'text' }).pipe(
      tap(() => {
        this.getTestes();
      })
    );
  }

  downloadPdf(id: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/teste/${id}/downloadpdf`, { responseType: 'blob' });
  }

  uploadPdf(uploadData: UploadData, id: string): Observable<any> {
    const url = `${this.baseUrl}/teste/${id}/uploadpdf`;
    const formData = new FormData();
    const blob = new Blob([new Uint8Array(uploadData.file_data)]);
    formData.append('file', blob, uploadData.file_name);
    return this.http.post(url, formData).pipe(
      tap(() => {
        this.getTestes();
      })
    );
  }
}

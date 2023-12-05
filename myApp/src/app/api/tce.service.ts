import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { TCE } from '../models/tce';

interface UploadData {
  file_data: Array<number>;
  file_name: string;
}

@Injectable({
  providedIn: 'root'
})

export class TCEService {
  private baseUrl = 'https://hisigns-production.up.railway.app';
  private TCEListSubject: BehaviorSubject<TCE[]> = new BehaviorSubject<TCE[]>([]);
  tceList$: Observable<TCE[]> = this.TCEListSubject.asObservable();


  constructor(private http: HttpClient) {
    this.getTCE();
  }

  getTCE(): void {
    this.http.get<TCE[]>(`${this.baseUrl}/tce/lista`).subscribe(testes => {
      this.TCEListSubject.next(testes);
    });
  }

  addTCE(tce: TCE): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/tce/incluir`, tce, { responseType: 'text' as 'json' }).pipe(
      tap((responseText) => {
        console.log("Response from server:", responseText);
        this.getTCE();
      })
    );
  }

  updateTCE(id: string, tce: TCE): Observable<TCE> {
    return this.http.put<TCE>(`${this.baseUrl}/tce/${id}/alterar`, tce).pipe(
      tap(() => {
        this.getTCE();
      })
    );
  }

  deleteTCE(id: string): Observable<string> {
    return this.http.delete(`${this.baseUrl}/tce/${id}/excluir`, { responseType: 'text' }).pipe(
      tap(() => {
        this.getTCE();
      })
    );
  }

  downloadPdf(id: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/tce/${id}/downloadpdf`, { responseType: 'blob' });
  }

  uploadPdf(uploadData: UploadData, id: string): Observable<any> {
    const url = `${this.baseUrl}/tce/${id}/uploadpdf`;
    const formData = new FormData();
    const blob = new Blob([new Uint8Array(uploadData.file_data)]);
    formData.append('file', blob, uploadData.file_name);
    return this.http.post(url, formData).pipe(
      tap(() => {
        this.getTCE();
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrilhasService {
  private apiUrl = 'https://hisigns-production.up.railway.app'; 

  constructor(private http: HttpClient) {}

  adicionarTrilha(trilha: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/tce/incluir`, trilha);
  }

  atualizarTrilha(id: string, trilha: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/tce/${id}/alterar`, trilha);
  }

  deletarTrilha(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/tce/${id}/excluir`);
  }

  obterListaTrilhas(modulo: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/tce/lista?módulo=${modulo}`);
  }

  fazerDownloadTCE(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/tce/${id}/downloadtce`);
  }

  fazerUploadTCE(id: string, arquivo: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/tce/${id}/uploadtce`, arquivo);
  }
}

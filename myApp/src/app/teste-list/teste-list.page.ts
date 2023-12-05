import { Component, OnInit } from '@angular/core';
import { TesteService } from '../api/teste.service';
import { Teste } from '../models/teste';

@Component({
  selector: 'app-teste-list',
  templateUrl: './teste-list.page.html',
  styleUrls: ['./teste-list.page.scss'],
})
export class TesteListPage implements OnInit {
  testeList: Teste[] = [];
  baseUrl = 'https://hisign-production.up.railway.app/';

  constructor(private testeService: TesteService) { }

  ngOnInit(): void {
    this.testeService.testeList$.subscribe((testes: Teste[]) => {
      this.testeList = testes;
    });
  }

  getPdfUrl(id: string): string {
    return `${this.baseUrl}/teste/${id}/downloadpdf`;
}
}

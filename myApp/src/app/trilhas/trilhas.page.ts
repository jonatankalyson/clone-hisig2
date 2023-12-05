import { Component } from '@angular/core';
import { TrilhasService } from '../api/trilha.service';

@Component({
  selector: 'app-trilhas',
  templateUrl: './trilhas.page.html',
  styleUrls: ['./trilhas.page.scss']
})
export class TrilhasPage {
  trilhas: any[] = [
    {
      title: 'Imersão Ágil',
      description: 'Gestão ágil, Scrum, inteligência emocional e Trello',
      iconSrc: '../../assets/icon/imersao-agil.png',
      route: '/imersao-agil'
    },
    {
      title: 'Frontend',
      description: 'HTML, CSS, JavaScript, TypeScript, Angular, Ionic, Json e JQuery',
      iconSrc: '../../assets/icon/frontend.png',
      route: '/classroom5'
    },
    {
      title: 'Backend',
      description: 'Node.js, Rest API, Java, Maven, Spring Tools, JPA, MySQL, Workbench, MongoDB',
      iconSrc: '../../assets/icon/backend.png',
      route: '/backend'
    }
  ];

  exibirFormulario = false;
  novaTrilha = {
    title: '',
    description: '',
    iconSrc: ''
  };

  constructor(private trilhasService: TrilhasService) {}

  adicionarTrilha() {
    this.exibirFormulario = true;
    // this.novaTrilha = { title: '', description: '', iconSrc: '' };
  }
  
  cancelarAdicaoTrilha() {
    this.exibirFormulario = false;
    this.novaTrilha = { title: '', description: '', iconSrc: '' };
  }

  salvarNovaTrilha() {
    this.trilhasService.adicionarTrilha(this.novaTrilha).subscribe(
      () => {
        this.trilhas.push(this.novaTrilha);
        this.exibirFormulario = false;
        this.novaTrilha = { title: '', description: '', iconSrc: '' };
      },
      error => {
        console.error('Erro ao salvar a trilha:', error);
      }
    );
  }
}

import { Component } from '@angular/core';
import { ListService } from '../api/list.service';
import { Horario } from '../models/horario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {
  horarios: Horario[] = [];
  termoDeBusca: string = '';
  horariosFiltrados: Horario[] = [];

  constructor(
    private listService: ListService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.getHorarios();
  }

  getHorarios(): void {
    this.listService.findAll().subscribe(
      (data: Horario[]) => {
        this.horarios = data;
        this.filtrarLista();
      },
      (error: any) => console.error('Ocorreu um erro ao buscar os horários', error)
    );
  }

  filtrarLista(): void {
    if (!this.termoDeBusca.trim()) {
      this.horariosFiltrados = [...this.horarios];
      return;
    }

    const termo = this.termoDeBusca.toLowerCase();

    this.horariosFiltrados = this.horarios.filter(horario => {
      return horario.nomecompleto.toLowerCase().includes(termo) ||
             horario.turno.toLowerCase().includes(termo) ||
             horario.setor.toLowerCase().includes(termo);
    });
  }

  apagarHorario(id: string): void {
    if (confirm('Tem certeza que deseja apagar este horário?')) {
      this.listService.delete(id).subscribe(
        () => {
          // Atualize a lista de horários
          this.getHorarios();
        },
        error => {
          console.error('Erro ao apagar horário:', error);
        }
      );
    }
  }

  editarHorario(id: string): void {
    this.router.navigate([`/editar-horario/${id}/alterar`]);
  }
}

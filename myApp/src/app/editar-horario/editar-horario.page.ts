import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorarioService } from '../api/horario.service';
import { Horario } from '../models/horario';

@Component({
  selector: 'app-editar-horario',
  templateUrl: './editar-horario.page.html',
  styleUrls: ['./editar-horario.page.scss'],
})
export class EditarHorarioPage implements OnInit {
  id: string | null = null;
  nomecompleto: string = '';
  entrada_Segunda: string = '';
  intervalo_Segunda: string = '';
  saida_Segunda: string = '';
  entrada_Terca: string = '';
  intervalo_Terca: string = '';
  saida_Terca: string = '';
  entrada_Quarta: string = '';
  intervalo_Quarta: string = '';
  saida_Quarta: string = '';
  entrada_Quinta: string = '';
  intervalo_Quinta: string = '';
  saida_Quinta: string = '';
  entrada_Sexta: string = '';
  intervalo_Sexta: string = '';
  saida_Sexta: string = '';
  entrada_Sabado: string = '';
  intervalo_Sabado: string = '';
  saida_Sabado: string = '';
  observacao: string = '';
  turno: string = '';
  setor: string = '';
  empresa: string = '';
  horariototalsemanal: string = '';
  horariototaldiario: string = '';

  constructor(
    private horarioService: HorarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id) {
      this.horarioService.get(this.id).subscribe(
        (horario: Horario) => {
          this.nomecompleto = horario.nomecompleto;
          this.entrada_Segunda = horario.entrada_Segunda;
          this.intervalo_Segunda = horario.intervalo_Segunda;
          this.saida_Segunda = horario.saida_Segunda;
          this.entrada_Terca = horario.entrada_Terca;
          this.intervalo_Terca = horario.intervalo_Terca;
          this.saida_Terca = horario.saida_Terca;
          this.entrada_Quarta = horario.entrada_Quarta;
          this.intervalo_Quarta = horario.intervalo_Quarta;
          this.saida_Quarta = horario.saida_Quarta;
          this.entrada_Quinta = horario.entrada_Quinta;
          this.intervalo_Quinta = horario.intervalo_Quinta;
          this.saida_Quinta = horario.saida_Quinta;
          this.entrada_Sexta = horario.entrada_Sexta;
          this.intervalo_Sexta = horario.intervalo_Sexta;
          this.saida_Sexta = horario.saida_Sexta;
          this.entrada_Sabado = horario.entrada_Sabado;
          this.intervalo_Sabado = horario.intervalo_Sabado;
          this.saida_Sabado = horario.saida_Sabado;
          this.observacao = horario.observacao;
          this.turno = horario.turno;
          this.setor = horario.setor;
          this.empresa = horario.empresa;
          this.horariototalsemanal = horario.horariototalsemanal;
          this.horariototaldiario = horario.horariototaldiario;

        },
        (error: any) => {
          console.error('Erro ao buscar horário:', error);
        }
      );
    }
  }

  checkInputs(): boolean {
    if (!this.nomecompleto
      || !this.entrada_Segunda || !this.intervalo_Segunda || !this.saida_Segunda
      || !this.entrada_Terca || !this.intervalo_Terca || !this.saida_Terca
      || !this.entrada_Quarta || !this.intervalo_Quarta || !this.saida_Quarta
      || !this.entrada_Quinta || !this.intervalo_Quinta || !this.saida_Quinta
      || !this.entrada_Sexta || !this.intervalo_Sexta || !this.saida_Sexta
      || !this.entrada_Sabado || !this.intervalo_Sabado || !this.saida_Sabado
      || !this.observacao || !this.turno || !this.setor || !this.empresa) {  // Adicionado verificação de setor e empresa
      
      return false;
    }
    return true;
  }

  updateHorario() {
    if (!this.checkInputs()) {
      alert('Preencha todos os campos');
      return;
    }

    let updatedHorario: Horario = {
      id: this.id,
      nomecompleto: this.nomecompleto,
      entrada_Segunda: this.entrada_Segunda,
      intervalo_Segunda: this.intervalo_Segunda,
      saida_Segunda: this.saida_Segunda,
      entrada_Terca: this.entrada_Terca,
      intervalo_Terca: this.intervalo_Terca,
      saida_Terca: this.saida_Terca,
      entrada_Quarta: this.entrada_Quarta,
      intervalo_Quarta: this.intervalo_Quarta,
      saida_Quarta: this.saida_Quarta,
      entrada_Quinta: this.entrada_Quinta,
      intervalo_Quinta: this.intervalo_Quinta,
      saida_Quinta: this.saida_Quinta,
      entrada_Sexta: this.entrada_Sexta,
      intervalo_Sexta: this.intervalo_Sexta,
      saida_Sexta: this.saida_Sexta,
      entrada_Sabado: this.entrada_Sabado,
      intervalo_Sabado: this.intervalo_Sabado,
      saida_Sabado: this.saida_Sabado,
      observacao: this.observacao,
      turno: this.turno,

      setor: this.setor,
      empresa: this.empresa,
      horariototalsemanal: this.horariototalsemanal,
      horariototaldiario: this.horariototaldiario

    };

    if(this.id) {
      this.horarioService.update(updatedHorario).subscribe(
        () => {
          alert('O horário foi atualizado com sucesso!');
          this.router.navigateByUrl('/list');
        },
        error => {
          console.error('Erro ao atualizar horário:', error);
        }
      );
    }
  }
}

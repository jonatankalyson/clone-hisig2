import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HorarioService } from '../api/horario.service';
import { Horario } from '../models/horario';
import { Router } from '@angular/router';



@Component({
  selector: 'app-quadro-de-horario',
  templateUrl: './quadro-de-horario.page.html',
  styleUrls: ['./quadro-de-horario.page.scss'],
})


export class QuadroDeHorarioPage implements OnInit {


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
  horariototalsemanal = '';
  horariototaldiario = '';

  


  constructor(private horarioService: HorarioService, private changeDetector: ChangeDetectorRef, private router: Router) { }

  ngOnInit() { }

  checkInputs(): boolean {

    console.log('nomecompleto', this.nomecompleto);
    console.log('entrada', this.entrada_Segunda);
    console.log('intervalo', this.intervalo_Segunda);
    console.log('saida', this.saida_Segunda);
    console.log('entrada', this.entrada_Terca);
    console.log('intervalo', this.intervalo_Terca);
    console.log('saida', this.saida_Terca);
    console.log('entrada', this.entrada_Quarta);
    console.log('intervalo', this.intervalo_Quarta);
    console.log('saida', this.saida_Quarta);
    console.log('entrada', this.entrada_Quinta);
    console.log('intervalo', this.intervalo_Quinta);
    console.log('saida', this.saida_Quinta);
    console.log('entrada', this.entrada_Sexta);
    console.log('intervalo', this.intervalo_Sexta);
    console.log('saida', this.saida_Sexta);
    console.log('entrada', this.entrada_Sabado);
    console.log('intervalo', this.intervalo_Sabado);
    console.log('saida', this.saida_Sabado);
    console.log('observacao', this.observacao);
    console.log('turno', this.turno);
    console.log('setor', this.setor);
    console.log('empresa', this.empresa);
    console.log('horariototaldiario', this.horariototaldiario);
    console.log('horariototalsemanal', this.horariototalsemanal);
    if (!this.nomecompleto
      || !this.entrada_Segunda || !this.intervalo_Segunda || !this.saida_Segunda
      || !this.entrada_Terca || !this.intervalo_Terca || !this.saida_Terca
      || !this.entrada_Quarta || !this.intervalo_Quarta || !this.saida_Quarta
      || !this.entrada_Quinta || !this.intervalo_Quinta || !this.saida_Quinta
      || !this.entrada_Sexta || !this.intervalo_Sexta || !this.saida_Sexta
      || !this.entrada_Sabado || !this.intervalo_Sabado || !this.saida_Sabado
      || !this.observacao || !this.turno || !this.setor || !this.empresa) {
      return false;
    }
    return true;
  }

  createHorario() {
    console.log('createHorario foi chamada');

    if (!this.checkInputs()) {
      alert('Preencha todos os campos');
      return;
    }

    let newHorario: Horario = {
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

    console.log('Chamando horarioService.create com:', newHorario);

    console.log(newHorario);  // Adicione esta linha aqui

    try {
      this.horarioService.create(newHorario).subscribe(
        response => {
          console.log('Resposta do servidor:', response);
          this.nomecompleto = '';
          this.entrada_Segunda = '';
          this.intervalo_Segunda = '';
          this.saida_Segunda = '';
          this.entrada_Terca = '';
          this.intervalo_Terca = '';
          this.saida_Terca = '';
          this.entrada_Quarta = '';
          this.intervalo_Quarta = '';
          this.saida_Quarta = '';
          this.entrada_Quinta = '';
          this.intervalo_Quinta = '';
          this.saida_Quinta = '';
          this.entrada_Sexta = '';
          this.intervalo_Sexta = '';
          this.saida_Sexta = '';
          this.entrada_Sabado = '';
          this.intervalo_Sabado = '';
          this.saida_Sabado = '';
          this.observacao = '';
          this.turno = '';
          this.setor = '';
          this.empresa = '';
          this.horariototalsemanal = '';
          this.horariototaldiario ='';
          this.changeDetector.detectChanges();

          console.log('Depois de limpar os campos:', this.nomecompleto,
          this.entrada_Segunda, this.intervalo_Segunda, this.saida_Segunda,
          this.entrada_Terca, this.intervalo_Terca, this.saida_Terca,
          this.entrada_Quarta, this.intervalo_Quarta, this.saida_Quarta,
          this.entrada_Quinta, this.intervalo_Quinta, this.saida_Quinta,
          this.entrada_Sexta, this.intervalo_Sexta, this.saida_Sexta,
          this.entrada_Sabado, this.intervalo_Sabado, this.saida_Sabado,
          this.observacao, this.turno, this.setor, this.empresa,
          this.horariototaldiario, this.horariototalsemanal);

          alert('O horário foi registrado com sucesso!');
          this.router.navigateByUrl('/list');
        },
        error => {
          console.log('Erro completo:', error);
          console.error('Erro do servidor:', error);
        }
      );
    } catch (e) {
      console.error('Exceção ao chamar horarioService.create:', e);
    }
  }
  showdate() {}
}

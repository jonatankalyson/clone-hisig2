import { Component, OnInit } from '@angular/core';
import { Router, Event as RouterEvent } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListService } from 'src/app/api/list.service';
import { ExercicioService } from 'src/app/api/exercicio.service';
import { Exercicio } from 'src/app/models/exercicio';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.scss'],
})
export class Exercicio1Component  implements OnInit {

  exercicio: Exercicio = {
    nomeExercicio: '',
    resumo: '',
    arquivo: [],
    linkGit: '',
    equipe: '',
  };
  fileToUpload: File | null = null;
  constructor(
    private exercicioService: ExercicioService,
    private router: Router,
    private listService: ListService,
    private alertController: AlertController) {
    this.router.events.subscribe((event: RouterEvent) => {
      console.log(event);
    });
  }

  ngOnInit(): void { }

  handleFileInput(event: Event) {
    const element = event.target as HTMLInputElement;
    const files = element.files;
    if (files && files.length > 0) {
      this.fileToUpload = files.item(0);
    }
  }

  createExercicio() {
    console.log('Chamando a função createExercicio');

    if (!this.exercicio.nomeExercicio || !this.exercicio.resumo) {
      this.showAlert('Por favor, preencha todos os campos');
      return;
    }

    if (!this.fileToUpload) {
      this.showAlert('Por favor, selecione um arquivo');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        this.exercicio.arquivo = Array.from(new Uint8Array(reader.result as ArrayBuffer));
        console.log('Enviando os seguintes dados para o servidor:', this.exercicio);

        this.exercicioService.addExercicio(this.exercicio).subscribe(
          (response: any) => {
              console.log('Resposta completa do servidor:', response);

              if (typeof response === 'string' && response.includes('Exercício incluído com sucesso!')) {
                  this.showAlert('Seu exercicio foi cadastrado!');

                  setTimeout(() => { //REFATORAR
                    this.router.navigateByUrl('/teste-list').then(success => {
                        if (!success) {
                            console.error('Falha ao navegar para teste-list.');
                        }
                    });
                }, 1000);
              } else {
                  throw new Error('Resposta inesperada do servidor');
              }
          },
          (error: any) => {
              console.error('Erro ao enviar o exercicio:', error);
              alert('Ocorreu um erro ao enviar o exercicio. Por favor, tente novamente.');
          }
      );
      }
    };

    if (this.fileToUpload) {
      reader.readAsArrayBuffer(this.fileToUpload);
    } else {
      console.error('No file to upload');
    }
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}

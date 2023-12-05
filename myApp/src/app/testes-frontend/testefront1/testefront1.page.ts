import { Component, OnInit } from '@angular/core';
import { TesteService } from '../../api/teste.service';
import { Teste } from './../../models/teste';
import { Router, Event as RouterEvent } from '@angular/router';
import { ListService } from 'src/app/api/list.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-testefront1',
  templateUrl: './testefront1.page.html',
  styleUrls: ['./testefront1.page.scss'],
})
export class Testefront1Page implements OnInit {

  teste: Teste = {
    nometeste: '',
    resumo: '',
    arquivo: [],
    linkgit: '',
    equipe: '',
  };

  fileToUpload: File | null = null;

  constructor(private testeService: TesteService, private router: Router, private listService: ListService, private alertController: AlertController) {
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

  createTeste() {
    console.log('Chamando a função createTeste');

    if (!this.teste.nometeste || !this.teste.resumo) {
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
        this.teste.arquivo = Array.from(new Uint8Array(reader.result as ArrayBuffer));
        console.log('Enviando os seguintes dados para o servidor:', this.teste);

        this.testeService.addTeste(this.teste).subscribe(
          (response: any) => {
              console.log('Resposta completa do servidor:', response);

              if (typeof response === 'string' && response.includes('Teste incluído com sucesso!')) {
                  this.showAlert('Seu teste foi cadastrado!');  // Mostra o alerta de sucesso

                  setTimeout(() => {
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
              console.error('Erro ao enviar o teste:', error);
              alert('Ocorreu um erro ao enviar o teste. Por favor, tente novamente.');
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

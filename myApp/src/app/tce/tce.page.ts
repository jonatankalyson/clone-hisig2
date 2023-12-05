import { Component, OnInit } from '@angular/core';
import { TCE } from '../models/tce';
import { TCEService } from '../api/tce.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tce',
  templateUrl: './tce.page.html',
  styleUrls: ['./tce.page.scss'],
})
export class TCEPage implements OnInit {
  tceList: TCE[] = [];
  baseUrl = 'https://hisign-production.up.railway.app/';
  tce: TCE = {
    nomeTCE: '',
    resumo: '',
    arquivo: []
  };

  fileToUpload: File | null = null;

  constructor(
    private TCEService: TCEService,
    private alertController: AlertController,
    private router: Router,
    ) {
  }

  ngOnInit(): void {
    this.TCEService.tceList$.subscribe((tce: TCE[]) => {
      this.tceList = tce;
    });
  }

  getPdfUrl(id: string): string {
    return `${this.baseUrl}/tce/${id}/downloadpdf`;
  }

  handleFileInput(event: Event) {
    const element = event.target as HTMLInputElement;
    const files = element.files;
    if (files && files.length > 0) {
      this.fileToUpload = files.item(0);
    }
  }

  createTCE() {
    console.log('Chamando a função createTCE');

    if (!this.tce.nomeTCE || !this.tce.resumo) {
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
        this.tce.arquivo = Array.from(new Uint8Array(reader.result as ArrayBuffer));
        console.log('Enviando os seguintes dados para o servidor:', this.tce);

        this.TCEService.addTCE(this.tce).subscribe(
          (response: any) => {
              console.log('Resposta completa do servidor:', response);

              if (typeof response === 'string' && response.includes('TCE incluído com sucesso!')) {
                  this.showAlert('Seu tce foi cadastrado!');  // Mostra o alerta de sucesso

                  setTimeout(() => {
                    this.router.navigateByUrl('/tce').then(success => {
                        if (!success) {
                            console.error('Falha ao navegar para tce-list.');
                        }
                    });
                }, 1000);
              } else {
                  throw new Error('Resposta inesperada do servidor');
              }
          },
          (error: any) => {
              console.error('Erro ao enviar o tce:', error);
              alert('Ocorreu um erro ao enviar o tce. Por favor, tente novamente.');
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

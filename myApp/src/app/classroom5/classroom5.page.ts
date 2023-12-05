import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-classroom5',
  templateUrl: './classroom5.page.html',
  styleUrls: ['./classroom5.page.scss'],
})
export class Classroom5Page implements OnInit {

  constructor() { }
  
  isCheckedAula1 = false;
  isCheckedAula2 = false;
  isCheckedAula3 = false;

  async openhtmlcss(){
    await Browser.open({url:'https://alunos.b7web.com.br/curso/html5-e-css3/o-que-e-html-e-pra-que-serve'})
    this.isCheckedAula1 = true;
  }

  async openjs(){
    await Browser.open({url:'https://alunos.b7web.com.br/curso/javascript/js-introducao-ao-javascript'})
    this.isCheckedAula2 = true;
  }

  async openionic(){
    await Browser.open({url:'https://www.youtube.com/watch?list=PLfhMD9jnhSMny0jU_azpnLhvsPWsvRv0q&v=qr9jS-ZrWpo&embeds_referring_euri=https%3A%2F%2Flukasbryt.github.io%2F&source_ve_path=OTY3MTQ&feature=emb_imp_woyt'})
    this.isCheckedAula3 = true;    
  }

  ngOnInit() {
  }

}

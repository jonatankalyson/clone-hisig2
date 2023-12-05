import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-classroom4',
  templateUrl: './classroom4.page.html',
  styleUrls: ['./classroom4.page.scss'],
})
export class Classroom4Page implements OnInit {

  constructor() { }

  isCheckedAula1 = false;

  async openinte(){
    await Browser.open({url:'https://www.conexaoagile.academy/courses/inteligenciaemocional'})
    this.isCheckedAula1 = true;
  }

  ngOnInit() {
  }

}

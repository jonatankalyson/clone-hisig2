import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-classroom2',
  templateUrl: './classroom2.page.html',
  styleUrls: ['./classroom2.page.scss'],
})
export class Classroom2Page implements OnInit {

  constructor() { }

  isCheckedAula1 = false;

  async openscrum(){
    await Browser.open({url: 'https://www.conexaoagile.academy/courses/fundamentos-do-scrum'})
    console.log('Browser open')
    this.isCheckedAula1 = true;
  }

  ngOnInit() {

  }

}

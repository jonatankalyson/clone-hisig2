import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-classroom1',
  templateUrl: './classroom1.page.html',
  styleUrls: ['./classroom1.page.scss'],
})
export class Classroom1Page implements OnInit {

  constructor() { }

  isCheckedAula1 = false;
  isCheckedAula2 = false;
  isCheckedAula3 = false;

  async openaula1(){
    await Browser.open({ url: 'https://drive.google.com/u/0/uc?id=15TelpTbyNmd9XyV-wZBoY9ODDqyNMahk&export' });
    Browser.addListener('browserFinished', () =>{
    console.log('browser finished')
    })
    this.isCheckedAula1 = true;
  }

  async openaula2(){
    await Browser.open({url: 'https://drive.google.com/u/0/uc?id=1Fi4gCEcUuuXZjDQU76R_TgJRhfATSY-g&amp;export=download" type="video/mp4'});
    console.log('browser open')
    this.isCheckedAula2 = true;
  }

  async openaula3(){
    await Browser.open({url:'https://drive.google.com/u/0/uc?id=15TelpTbyNmd9XyV-wZBoY9ODDqyNMahk&amp;export=download%22%20type=%22video/mp4'});
    console.log('browser open')
    this.isCheckedAula3 = true;
  }

  ngOnInit() {
  }

}

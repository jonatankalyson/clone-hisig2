import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-classroom3',
  templateUrl: './classroom3.page.html',
  styleUrls: ['./classroom3.page.scss'],
})
export class Classroom3Page implements OnInit {

  constructor() { }

  isCheckedAula1 = false;

  async opentrello(){
    await Browser.open({url:'https://lukasbryt.github.io/trilhafront/video.html'})
    console.log('Browser open')
    this.isCheckedAula1 = true;
  }

  ngOnInit() {
  }

}

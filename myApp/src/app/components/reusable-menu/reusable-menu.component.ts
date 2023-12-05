import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reusable-menu',
  templateUrl: './reusable-menu.component.html',
  styleUrls: ['./reusable-menu.component.scss'],
})
export class ReusableMenuComponent implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {}

  closeMenu() {
    this.menu.close('first');
  }

  async ionViewDidEnter() {
    const isOpen = await this.menu.isOpen('first');
    if (!isOpen) {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }
  }

  ionViewWillLeave() {
    this.menu.enable(false, 'first');
  }
}

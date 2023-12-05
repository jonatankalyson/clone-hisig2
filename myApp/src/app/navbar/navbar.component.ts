
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showBackButton= false;
  showProfileHome= false;
  constructor(private menuCtrl: MenuController, private router:Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
      this.showBackButton= this.shouldShowBackButton()
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
      this.showProfileHome= this.shouldProfileHome()
      }
    });
  }

  shouldProfileHome(): boolean {
    const correntRouter = this.router.url
    if(correntRouter == '/tab2'){
      return true
    }
    return false
  }

    shouldShowBackButton(): boolean {
      const correntRouter = this.router.url
      if(correntRouter == '/trilhas' || correntRouter == '/exercicios' || correntRouter == '/horario'|| correntRouter == '/create-task'|| 
        correntRouter == '/imersao-agil' || correntRouter == '/classroom5' ||correntRouter == '/tests-front-back' || correntRouter == '/testefront1'|| 
        correntRouter =='/testefront2'|| correntRouter == '/testefront3' || correntRouter == '/tests-back-end' || correntRouter == '/tests-back-end'|| 
        correntRouter == '/testeback1'|| correntRouter == '/testeback2' || correntRouter == '/testeback3' || correntRouter == '/quadro-de-horario'|| 
        correntRouter == '/tests-front-end' || correntRouter == '/exercicio-frontend'|| correntRouter == '/exercicio1' || correntRouter == '/classroom1'||
        correntRouter == '/classroom2' || correntRouter == '/classroom3' || correntRouter == '/classroom4' || correntRouter == '/perfil' || correntRouter == '/list'||
        correntRouter == '/tce' || correntRouter == '/settings' || correntRouter == '/info' || correntRouter == '/registration' || correntRouter == '/login' ||
        correntRouter == '/forgot-password' || correntRouter == '/teste-list'){
        return true
      }
      return false
    }
}
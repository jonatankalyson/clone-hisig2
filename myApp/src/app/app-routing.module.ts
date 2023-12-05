import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ExercicioFrontendComponent } from './components/exercicios/exercicio-frontend/exercicio-frontend.component';
import { Exercicio1Component } from './components/exercicios/exercicio1/exercicio1.component' ;

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'trilhas',
    loadChildren: () => import('./trilhas/trilhas.module').then( m => m.TrilhasPageModule)
  },
  {
    path: 'imersao-agil',
    loadChildren: () => import('./imersao-agil/imersao-agil.module').then( m => m.ImersaoAgilPageModule)
  },
  {
    path: 'create-task',
    loadChildren: () => import('./create-task/create-task.module').then( m => m.CreateTaskPageModule)
  },
  {
    path: 'classroom1',
    loadChildren: () => import('./classes/classroom1/classroom1.module').then( m => m.Classroom1PageModule)
  },
  {
    path: 'classroom2',
    loadChildren: () => import('./classes/classroom2/classroom2.module').then( m => m.Classroom2PageModule)
  },
  {
    path: 'classroom3',
    loadChildren: () => import('./classes/classroom3/classroom3.module').then( m => m.Classroom3PageModule)
  },
  {
    path: 'classroom4',
    loadChildren: () => import('./classes/classroom4/classroom4.module').then( m => m.Classroom4PageModule)
  },
  {
    path: 'tests-front-back',
    loadChildren: () => import('./tests-front-back/tests-front-back.module').then( m => m.TestsFrontBackPageModule)
  },
  {
    path: 'tests-front-end',
    loadChildren: () => import('./tests-front-end/tests-front-end.module').then( m => m.TestsFrontEndPageModule)
  },
  {
    path: 'tests-back-end',
    loadChildren: () => import('./tests-back-end/tests-back-end.module').then( m => m.TestsBackEndPageModule)
  },
  {
    path: 'quadro-de-horario',
    loadChildren: () => import('./quadro-de-horario/quadro-de-horario.module').then( m => m.QuadroDeHorarioPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'editar-horario/:id/alterar',
    loadChildren: () => import('./editar-horario/editar-horario.module').then( m => m.EditarHorarioPageModule)
  },
  {
    path: 'testefront1',
    loadChildren: () => import('./testes-frontend/testefront1/testefront1.module').then( m => m.Testefront1PageModule)
  },
  {
    path: 'testefront2',
    loadChildren: () => import('./testes-frontend/testefront2/testefront2.module').then( m => m.Testefront2PageModule)
  },
  {
    path: 'testefront3',
    loadChildren: () => import('./testes-frontend/testefront3/testefront3.module').then( m => m.Testefront3PageModule)
  },
  {
    path: 'testeback1',
    loadChildren: () => import('./testes-backend/testeback1/testeback1.module').then( m => m.Testeback1PageModule)
  },
  {
    path: 'testeback2',
    loadChildren: () => import('./testes-backend/testeback2/testeback2.module').then( m => m.Testeback2PageModule)
  },
  {
    path: 'testeback3',
    loadChildren: () => import('./testes-backend/testeback3/testeback3.module').then( m => m.Testeback3PageModule)
  },
  {
    path: 'teste-list',
    loadChildren: () => import('./teste-list/teste-list.module').then( m => m.TesteListPageModule)
  },
  {
    path: 'classroom5',
    loadChildren: () => import('./classroom5/classroom5.module').then( m => m.Classroom5PageModule)
  },
  {
    path: 'tce',
    loadChildren: () => import('./tce/tce.module').then( m => m.TcePageModule)
  },
    {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'exercicios',
    loadChildren: () => import('./exercicios/exercicios.module').then( m => m.ExerciciosPageModule)
  },
  {
    path: 'exercicio-frontend',
    component: ExercicioFrontendComponent
  },
  {
    path: 'exercicio1',
    component: Exercicio1Component
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

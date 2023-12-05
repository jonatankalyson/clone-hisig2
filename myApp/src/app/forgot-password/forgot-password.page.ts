import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}

  submit() {
    // Lógica para processar o formulário de recuperação de senha aqui
  }

  getErrorMessage(controlName: string) {
    const control = this.forgotPasswordForm.get(controlName);
    if (control) {
      if (control.hasError('required')) {
        return 'Campo obrigatório';
      }
      if (control.hasError('email')) {
        return 'Email inválido';
      }
    }
    return '';
  }
}

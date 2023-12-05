import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, { validator: this.matchingPasswords('password', 'confirmPassword') });
  }

  ngOnInit() {}

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: AbstractControl): { [key: string]: any } | null => {
      const password = group.get(passwordKey);
      const confirmPassword = group.get(confirmPasswordKey);

      if (password && confirmPassword && password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ passwordMismatch: true });
      } else {
        confirmPassword?.setErrors(null);
      }
      if (confirmPassword?.value === '') {
        confirmPassword?.setErrors({ required: true });
      }
      return null;
    };
  }

  submit() {
    // Lógica para processar o formulário de cadastro aqui
  }

  getErrorMessage(controlName: string) {
    const control = this.registrationForm.get(controlName);
    if (control) {
      if (control.hasError('required')) {
        return 'Campo obrigatório';
      }
      if (control.hasError('email')) {
        return 'Email inválido';
      }
      if (control.hasError('passwordMismatch')) {
        return 'As senhas não coincidem';
      }
    }
    return '';
  }
}

import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import validator from 'validator';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  validateEmail(value: string): string[] {
    return validator.isEmail(value) ? [] : ['Введите настоящую почту!'];
  }

  validatePassword(value: string): string[] {
    return validator.isStrongPassword(value)
      ? []
      : ['Ввведите сложный пароль!'];
  }
}

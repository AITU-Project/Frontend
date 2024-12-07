import { Component, input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInputDirective } from '../../directives/auth-input.directive';

@Component({
  selector: 'app-auth-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './auth-input.component.html',
  styleUrl: './auth-input.component.scss',
})
export class AuthInputComponent extends AuthInputDirective {
  type = input<'text' | 'password' | 'email'>('text');
  placeholder = input<string>('');
}

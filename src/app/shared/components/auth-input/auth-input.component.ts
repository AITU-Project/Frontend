import { Component, input } from '@angular/core';

type InputType = 'text' | 'password';

@Component({
  selector: 'app-auth-input',
  standalone: true,
  imports: [],
  templateUrl: './auth-input.component.html',
  styleUrl: './auth-input.component.scss',
})
export class AuthInputComponent {
  title = input('');
  placeholder = input('');
  value = input('');
  type = input('text' as InputType);
}

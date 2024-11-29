import { Component, input } from '@angular/core';

type InputType = 'text' | 'password' | 'email';
type Validation = (value: string) => string[];

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
  type = input<InputType>('text');
  name = input('');
  validate = input<Validation>(() => []);

  notes: string[] = [];

  onChange(event: Event) {
    const element = event.target as HTMLInputElement;
    this.notes = this.validate()(element.value);
  }
}

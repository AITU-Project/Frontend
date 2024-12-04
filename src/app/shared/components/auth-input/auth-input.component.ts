import { Component, input, output } from '@angular/core';
import { ValidatorFunction } from '../../../core/services/validation';

type InputType = 'text' | 'password' | 'email';

@Component({
  selector: 'app-auth-input',
  standalone: true,
  imports: [],
  templateUrl: './auth-input.component.html',
  styleUrl: './auth-input.component.scss',
})
export class AuthInputComponent {
  title = input<string>('');
  placeholder = input<string>('');
  value = input<string>('');
  type = input<InputType>('text');
  name = input<string>('');
  validate = input<ValidatorFunction<string>>(() => []);

  validity = output<boolean>();
  content = output<string>();

  notes: string[] = [];

  onChange(event: Event) {
    const element = event.target as HTMLInputElement;
    this.notes = this.validate()(element.value);
    this.validity.emit(this.notes.length === 0);
    this.content.emit(element.value);
  }
}

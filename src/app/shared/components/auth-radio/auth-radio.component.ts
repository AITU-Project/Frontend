import { Component, input, output } from '@angular/core';
import { ValidatorFunction } from '../../../core/services/validation';

interface Button {
  title: string;
  value: string;
}

@Component({
  selector: 'app-auth-radio',
  standalone: true,
  imports: [],
  templateUrl: './auth-radio.component.html',
  styleUrl: './auth-radio.component.scss',
})
export class AuthRadioComponent {
  title = input<string>('');
  name = input<string>('');
  buttons = input<Button[]>([]);
  validate = input<ValidatorFunction<string>>(() => []);

  validity = output<boolean>();

  notes: string[] = [];

  onChange(event: Event) {
    const element = event.target as HTMLInputElement;
    this.notes = this.validate()(element.value);
    this.validity.emit(this.notes.length === 0);
  }
}

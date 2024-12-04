import { Component, input, output } from '@angular/core';
import { ValidatorFunction } from '../../../core/services/validation';

interface Option {
  title: string;
  value: string;
}

@Component({
  selector: 'app-auth-select',
  standalone: true,
  imports: [],
  templateUrl: './auth-select.component.html',
  styleUrl: './auth-select.component.scss',
})
export class AuthSelectComponent {
  title = input<string>('');
  name = input<string>('');
  placeholder = input<string>('');
  options = input<Option[]>([]);
  validate = input<ValidatorFunction<string>>(() => []);

  validity = output<boolean>();

  notes: string[] = [];

  onChange(event: Event) {
    const element = event.target as HTMLInputElement;
    this.notes = this.validate()(element.value);
    this.validity.emit(this.notes.length === 0);
  }
}

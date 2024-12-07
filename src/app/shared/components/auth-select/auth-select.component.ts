import { Component, input } from '@angular/core';
import { AuthInputDirective } from '../../directives/auth-input.directive';

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
export class AuthSelectComponent extends AuthInputDirective {
  placeholder = input<string>('');
  options = input<Option[]>([]);
}

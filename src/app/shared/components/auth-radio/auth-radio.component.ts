import { Component, input } from '@angular/core';
import { AuthInputDirective } from '../../directives/auth-input.directive';

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
export class AuthRadioComponent extends AuthInputDirective {
  buttons = input<Button[]>([]);
}

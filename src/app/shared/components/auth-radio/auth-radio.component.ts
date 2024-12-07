import { Component, input } from '@angular/core';

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
  notes: string[] = [];
}

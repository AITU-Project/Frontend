import { Component, input } from '@angular/core';

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
}

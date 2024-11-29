import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-button',
  standalone: true,
  imports: [],
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.scss',
})
export class AuthButtonComponent {
  @Input()
  title: string = '';
}

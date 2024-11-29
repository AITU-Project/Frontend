import { Component, input } from '@angular/core';

type InputType = 'text';

@Component({
  selector: 'app-studio-input',
  standalone: true,
  imports: [],
  templateUrl: './studio-input.component.html',
  styleUrl: './studio-input.component.scss',
})
export class StudioInputComponent {
  title = input<string>('');
  type = input<InputType>('text');
  placeholder = input<string>('');
  value = input<string>('');
}

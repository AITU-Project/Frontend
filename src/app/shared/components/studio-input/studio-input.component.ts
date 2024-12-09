import { Component, input } from '@angular/core';
import { StudioInputDirective } from '../../directives/studio-input.directive';

type InputType = 'text' | 'date' | 'datetime-local';

@Component({
  selector: 'app-studio-input',
  standalone: true,
  imports: [],
  templateUrl: './studio-input.component.html',
  styleUrl: './studio-input.component.scss',
})
export class StudioInputComponent extends StudioInputDirective {
  type = input<InputType>('text');
  placeholder = input<string>('');
}

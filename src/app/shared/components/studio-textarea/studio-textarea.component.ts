import { Component, input } from '@angular/core';
import { StudioInputDirective } from '../../directives/studio-input.directive';

@Component({
  selector: 'app-studio-textarea',
  standalone: true,
  imports: [],
  templateUrl: './studio-textarea.component.html',
  styleUrl: './studio-textarea.component.scss',
})
export class StudioTextareaComponent extends StudioInputDirective {
  placeholder = input<string>('');
}

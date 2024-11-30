import { Component, input } from '@angular/core';
import { StudioInputDirective } from '../../directives/studio-input.directive';

@Component({
  selector: 'app-studio-select',
  standalone: true,
  imports: [],
  templateUrl: './studio-select.component.html',
  styleUrl: './studio-select.component.scss',
})
export class StudioSelectComponent extends StudioInputDirective {
  options = input<string[]>([]);
}

import { Component, input, output } from '@angular/core';
import { StudioInputDirective } from '../../directives/studio-input.directive';
import { Contains } from '../../directives/auth-input.directive';

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
  name = input<string>('');

  contains = output<Contains<never>>();

  interaction(event: Event) {
    const element = event.target as HTMLInputElement;
    this.contains.emit({ name: this.name() as never, value: element.value });
  }
}

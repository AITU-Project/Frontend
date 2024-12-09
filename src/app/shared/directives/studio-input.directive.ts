import { Directive, input, output } from '@angular/core';
import { Contains } from './auth-input.directive';

@Directive({
  standalone: true,
})
export class StudioInputDirective {
  title = input<string>('');
  value = input<string>('');
  name = input<string>('');

  contains = output<Contains<never>>();

  interaction(event: Event) {
    const element = event.target as HTMLInputElement;
    this.contains.emit({ name: this.name() as never, value: element.value });
  }
}

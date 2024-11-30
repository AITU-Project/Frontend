import { Directive, input } from '@angular/core';

@Directive({
  standalone: true,
})
export class StudioInputDirective {
  title = input<string>('');
  value = input<string>('');
}

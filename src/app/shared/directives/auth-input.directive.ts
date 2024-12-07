import { Directive, input, output } from '@angular/core';

export interface Contains<N> {
  name: N;
  value: string;
}

@Directive({ standalone: true })
export class AuthInputDirective {
  title = input<string>('');
  value = input<string>('');
  name = input<string>('');
  notes = input<string[]>([]);
  required = input<boolean>(false);

  contains = output<Contains<never>>();

  interaction(event: Event) {
    const element = event.target as HTMLInputElement;
    this.contains.emit({ name: this.name() as never, value: element.value });
  }
}

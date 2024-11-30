import { Component, input } from '@angular/core';

@Component({
  selector: 'app-studio-select',
  standalone: true,
  imports: [],
  templateUrl: './studio-select.component.html',
  styleUrl: './studio-select.component.scss',
})
export class StudioSelectComponent {
  title = input('');
  options = input<string[]>([]);
}

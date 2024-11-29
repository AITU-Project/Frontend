import { Component, input } from '@angular/core';

@Component({
  selector: 'app-studio-section',
  standalone: true,
  imports: [],
  templateUrl: './studio-section.component.html',
  styleUrl: './studio-section.component.scss',
})
export class StudioSectionComponent {
  title = input('');
}

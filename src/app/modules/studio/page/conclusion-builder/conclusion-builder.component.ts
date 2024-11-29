import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-conclusion-builder',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './conclusion-builder.component.html',
  styleUrl: './conclusion-builder.component.scss',
})
export class ConclusionBuilderComponent {}

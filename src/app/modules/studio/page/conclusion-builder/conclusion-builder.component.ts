import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DocumentTemplate } from '../../../../data/studio/document-builder/document-builder.constants';

@Component({
  selector: 'app-conclusion-builder',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './conclusion-builder.component.html',
  styleUrl: './conclusion-builder.component.scss',
})
export class ConclusionBuilderComponent {
  template = DocumentTemplate;
}

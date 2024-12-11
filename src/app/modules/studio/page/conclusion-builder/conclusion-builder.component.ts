/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DocumentTemplate } from '../../../../data/document-builder/document-builder.constants';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Contains } from '../../../../shared/directives/auth-input.directive';

@Component({
  selector: 'app-conclusion-builder',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './conclusion-builder.component.html',
  styleUrl: './conclusion-builder.component.scss',
})
export class ConclusionBuilderComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.controls);
  }

  template = DocumentTemplate;

  defaultDate = new Date().toISOString().split('T')[0];
  defaultDatetime = new Date().toISOString().slice(0, 16);

  private readonly controls = DocumentTemplate.sections.reduce(
    (common, section) => {
      section.inputs.forEach((input) => {
        if (input.name) {
          common[input.name] = new FormControl('', [Validators.required]);
        }
      });

      return common;
    },
    {} as any
  );

  public readonly form = new FormGroup(this.controls);

  onInput(contains: Contains<any>) {
    const control = this.form.get(contains.name);

    if (control) {
      control.setValue(contains.value);
    }
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}

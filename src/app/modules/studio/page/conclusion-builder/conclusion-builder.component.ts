/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DocumentTemplate } from '../../../../data/document-builder/document-builder.constants';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Contains } from '../../../../shared/directives/auth-input.directive';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { APIService } from '../../../../core/services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conclusion-builder',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './conclusion-builder.component.html',
  styleUrl: './conclusion-builder.component.scss',
})
export class ConclusionBuilderComponent {
  template = DocumentTemplate;

  createdBy: string = '';

  defaultDate = new Date().toISOString().split('T')[0];
  defaultDatetime = new Date().toISOString().slice(0, 16);

  private readonly auth = inject(AuthService);
  private readonly api = inject(APIService);
  private readonly router = inject(Router);

  profile: any = {};

  constructor() {
    this.auth.profile()?.subscribe({
      next: (response) => {
        this.createdBy = response.employee.id;
        this.profile = response.profile;
      },
    });
  }

  private readonly controls = DocumentTemplate.sections.reduce(
    (common, section) => {
      section.inputs.forEach((input) => {
        if (input.name) {
          let value = '';

          if (input.name === 'region') {
            value = this.profile.region;
          } else {
            value = input.value
              ? input.value
              : input.type === 'date'
                ? this.defaultDate
                : input.type === 'datetime'
                  ? this.defaultDatetime
                  : '';
          }

          common[input.name] = new FormControl(value, [Validators.required]);
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
    this.api
      .post('/conclusions/', {
        createdBy: this.createdBy,
        registrationDate: form.get('registrationDate')?.value,
        region: this.profile.region,
        position: form.get('position')?.value,
        plannedActions: form.get('plannedActions')?.value,
        eventDate: form.get('eventDate')?.value,
        investigator: form.get('investigator')?.value,
        eventPlace: form.get('eventPlace')?.value,
        status: 'В работе',
        eventRelation: form.get('eventRelation')?.value,
        investigationType: 'Расследование',
        justification: form.get('justification')?.value,
        actionResult: form.get('actionResult')?.value,
        isBusinessRelated: form.get('isBusinessRelated')?.value === 'Да',
      })
      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.router.navigate(['studio', 'conclusions-journal']);
        },
        error: (errors) => {
          console.log(errors);
        },
      });
  }
}

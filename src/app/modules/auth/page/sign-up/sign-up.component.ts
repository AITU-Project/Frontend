import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import {
  ValidationService,
  ValidationType,
} from '../../../../core/services/validation';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  private readonly validation = inject(ValidationService);
  private readonly router = inject(Router);

  private password = '';

  readonly validators = {
    name: this.validation.manage<string>(ValidationType.NotEmpty),
    surname: this.validation.manage<string>(ValidationType.NotEmpty),
    sex: this.validation.manage<string>(ValidationType.NotEmpty),
    region: this.validation.manage<string>(ValidationType.NotEmpty),
    role: this.validation.manage<string>(ValidationType.NotEmpty),
    email: this.validation.manage<string>(ValidationType.Email),
    password: this.validation.manage<string>(ValidationType.Password),
    repeat: (value: string) => {
      return this.validation.validate<string>(
        ValidationType.Matches,
        value,
        this.password
      );
    },
  };

  readonly validity = Object.keys(this.validators).reduce(
    (dict, value) => {
      dict[value as keyof typeof this.validators] = false;
      return dict;
    },
    {} as Record<keyof typeof this.validators, boolean>
  );

  get formIsValid(): boolean {
    return Object.values(this.validity).every((isValid) => isValid);
  }

  handleClick() {
    if (!this.formIsValid) {
      return;
    }

    this.router.navigate(['studio']);
  }

  handleInputs(name: keyof typeof this.validators, validity: boolean): void {
    this.validity[name] = validity;
  }

  handlePassword(value: string) {
    this.password = value;
  }
}

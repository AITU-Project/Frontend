import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import {
  ValidationService,
  ValidationType,
} from '../../../../core/services/validation';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  private readonly validation = inject(ValidationService);
  private readonly router = inject(Router);

  readonly validators = {
    email: this.validation.manage<string>(ValidationType.Email),
    password: this.validation.manage<string>(ValidationType.Password),
  };

  readonly validity: Record<string, boolean> = {
    email: false,
    password: false,
  };

  get isFormValid(): boolean {
    return Object.values(this.validity).every((isValid) => isValid);
  }

  handleInputs(name: string, validity: boolean): void {
    this.validity[name] = validity;
  }

  handleClick() {
    if (!this.isFormValid) {
      return;
    }

    this.router.navigate(['studio']);
  }
}

import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Contains } from '../../../../shared/directives/auth-input.directive';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.scss',
})
export class VerifyComponent {
  private readonly auth = inject(AuthService);

  private readonly controls = {
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
      Validators.pattern('^[0-9]*$'),
    ]),
  };

  public readonly form = new FormGroup(this.controls);

  onInput(contains: Contains<keyof typeof this.controls>) {
    const control = this.form.get(contains.name);

    if (control) {
      control.setValue(contains.value);
    }
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }

    this.auth.verify(form.value)?.subscribe({
      next: (response) => {
        this.auth.inVerification = null;
        this.auth.login(response.email, response.password).subscribe({
          next: (response) => {
            this.auth.save(response.access_token);
            window.location.reload();
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

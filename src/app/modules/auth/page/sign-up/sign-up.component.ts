import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Contains } from '../../../../shared/directives/auth-input.directive';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SharedModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  private readonly router = inject(Router);
  private readonly auth = inject(AuthService);

  private readonly controls = {
    firstname: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),

    region: new FormControl('', [Validators.required]),
    sex: new FormControl('', [Validators.required]),

    role: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-]).{8,}$/
      ),
    ]),

    repeat: new FormControl('', [Validators.required]),
  };

  private readonly messages: Record<string, string> = {
    minlength: 'Не менее 8 символов',
    pattern: 'Пароль должен быть сложным',
    required: 'Обязательное поле',
    email: 'Введите адрес почты',
    mismatch: 'Пароли должны совпадать',
  };

  public readonly form = new FormGroup(this.controls, {
    validators: [
      (group: AbstractControl): ValidationErrors | null => {
        return group.get('password')?.value !== group.get('repeat')?.value
          ? { mismatch: true }
          : null;
      },
    ],
  });

  public readonly notes = Object.keys(this.controls).reduce(
    (notes, name) => {
      notes[name as keyof typeof this.controls] = [];
      return notes;
    },
    {} as Record<keyof typeof this.controls, string[]>
  );

  onInput(contains: Contains<keyof typeof this.controls>) {
    const control = this.form.get(contains.name);

    if (control) {
      control.setValue(contains.value);
      const notes: string[] = [];

      if (control.errors) {
        Object.keys(control.errors).forEach((validator) => {
          notes.push(this.messages[validator]);
        });
      }

      if (
        contains.name === 'repeat' &&
        this.form.errors?.['mismatch'] &&
        !control.errors?.['required']
      ) {
        notes.push(this.messages['mismatch']);
      }

      this.notes[contains.name] = notes;
    }
  }

  onSubmit(form: FormGroup): void {
    if (!form.valid) {
      return;
    }

    const dto = {
      email: this.form.get('email')?.value as string,
      password: this.form.get('password')?.value as string,
    };

    this.auth.login(dto.email, dto.password).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

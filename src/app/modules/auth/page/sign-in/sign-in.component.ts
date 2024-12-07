import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Contains } from '../../../../shared/directives/auth-input.directive';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [SharedModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  private readonly router = inject(Router);

  private readonly controls = {
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-]).{8,}$/
      ),
    ]),
  };

  private readonly messages: Record<string, string> = {
    minlength: 'Не менее 8 символов',
    pattern: 'Пароль должен быть сложным',
    required: 'Обязательное поле',
    email: 'Введите адрес почты',
  };

  public readonly form = new FormGroup(this.controls);

  notes = Object.keys(this.controls).reduce(
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
        Object.keys(control.errors).forEach((validator) =>
          notes.push(this.messages[validator])
        );
      }

      this.notes[contains.name] = notes;
    }
  }

  onSubmit(form: FormGroup): void {
    if (form.valid) {
      this.router.navigate(['studio']);
    }
  }
}

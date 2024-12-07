import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Contains } from '../../../../shared/directives/auth-input.directive';

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.scss',
})
export class VerifyComponent {
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

  handleClick() {
    console.log(this.form.value);
  }
}

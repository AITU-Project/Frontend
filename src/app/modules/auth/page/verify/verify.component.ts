import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [SharedModule, FormsModule],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.scss',
})
export class VerifyComponent {
  form = new FormGroup({
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  private code: string = '';

  handleOutput(value: string) {
    this.code = value;
  }

  handleClick() {
    console.log(this.code);
  }
}

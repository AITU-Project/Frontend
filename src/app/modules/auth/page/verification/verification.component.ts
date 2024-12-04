import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [SharedModule, FormsModule],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.scss',
})
export class VerificationComponent {
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

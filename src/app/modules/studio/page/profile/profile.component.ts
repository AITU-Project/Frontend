import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  private readonly auth = inject(AuthService);

  constructor() {
    this.auth.profile()?.subscribe({
      next: (response: any) => {
        const profile = response.profile;
        this.form = new FormGroup({
          name: new FormControl(profile.name),
          surname: new FormControl(profile.surname),
          email: new FormControl(profile.email),
          region: new FormControl(profile.region),
          role: new FormControl(profile.role),
        });
      },
      error: (errors) => {
        console.log(errors);
      },
    });
  }

  public form: FormGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    region: new FormControl(''),
    role: new FormControl(''),
  });
}

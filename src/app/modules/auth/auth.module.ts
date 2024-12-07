import { NgModule } from '@angular/core';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { AuthRoutingModule } from './auth.routing';
import { VerifyComponent } from './page/verify/verify.component';

@NgModule({
  imports: [
    SignInComponent,
    SignUpComponent,
    VerifyComponent,
    AuthRoutingModule,
  ],
})
export class AuthModule {}

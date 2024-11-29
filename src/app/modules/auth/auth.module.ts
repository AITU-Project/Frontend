import { NgModule } from '@angular/core';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
  imports: [SignInComponent, SignUpComponent, AuthRoutingModule],
})
export class AuthModule {}

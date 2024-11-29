import { NgModule } from '@angular/core';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { AuthRoutingModule } from './auth.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [SignInComponent, SignUpComponent, AuthRoutingModule, SharedModule],
})
export class AuthModule {}

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './page/sign-up/sign-up.component';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { VerifyComponent } from './page/verify/verify.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/sign-in',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'verify',
        component: VerifyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

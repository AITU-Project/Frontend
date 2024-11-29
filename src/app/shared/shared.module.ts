import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthInputComponent } from './components/auth-input/auth-input.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';

@NgModule({
  imports: [CommonModule, AuthInputComponent, AuthButtonComponent],
  exports: [CommonModule, AuthInputComponent, AuthButtonComponent],
})
export class SharedModule {}

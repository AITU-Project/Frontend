import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthInputComponent } from './components/auth-input/auth-input.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';

@NgModule({
  imports: [
    CommonModule,
    AuthInputComponent,
    AuthButtonComponent,
    SidePanelComponent,
  ],
  exports: [
    CommonModule,
    AuthInputComponent,
    AuthButtonComponent,
    SidePanelComponent,
  ],
})
export class SharedModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthInputComponent } from './components/auth-input/auth-input.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { StudioInputComponent } from './components/studio-input/studio-input.component';
import { StudioTextareaComponent } from './components/studio-textarea/studio-textarea.component';
import { StudioSelectComponent } from './components/studio-select/studio-select.component';
import { StudioSectionComponent } from './components/studio-section/studio-section.component';

const Components = [
  CommonModule,
  AuthInputComponent,
  AuthButtonComponent,
  SidePanelComponent,
  StudioInputComponent,
  StudioTextareaComponent,
  StudioSelectComponent,
  StudioSectionComponent,
];

@NgModule({
  imports: Components,
  exports: Components,
})
export class SharedModule {}

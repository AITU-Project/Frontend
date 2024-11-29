import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-studio-layout',
  standalone: true,
  imports: [RouterModule, SharedModule],
  templateUrl: './studio-layout.component.html',
  styleUrl: './studio-layout.component.scss',
})
export class StudioLayoutComponent {}

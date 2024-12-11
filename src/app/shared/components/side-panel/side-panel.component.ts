import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

interface MenuOption {
  icon: string;
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [NgClass],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
})
export class SidePanelComponent implements OnInit {
  ngOnInit(): void {
    this.auth.profile()?.subscribe({
      next: (response) => {
        if (response.profile.role !== 'employee') {
          this.options = this.options.slice(1);
        }
      },
    });
  }

  router = inject(Router);
  auth = inject(AuthService);

  options: MenuOption[] = [
    {
      icon: 'assets/icons/studio/document.svg',
      title: 'Создание заключения',
      route: 'conclusion-builder',
    },
    {
      icon: 'assets/icons/studio/menu.svg',
      title: 'Журнал заключений',
      route: 'conclusions-journal',
    },
    {
      icon: 'assets/icons/studio/profile.svg',
      title: 'Профиль',
      route: 'profile',
    },
  ];

  click(option: MenuOption) {
    this.router.navigate(['studio', option.route]);
  }

  logout() {
    this.auth.logout();
    window.location.reload();
  }

  isActive(option: MenuOption): boolean {
    return option.route === this.router.url.split('/')[2];
  }
}

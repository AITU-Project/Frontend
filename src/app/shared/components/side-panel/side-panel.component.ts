import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

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
export class SidePanelComponent {
  router = inject(Router);

  options: MenuOption[] = [
    {
      icon: 'assets/icons/studio/identification.svg',
      title: 'Реестр повесток и вызовов',
      route: 'summons-subpoenas',
    },
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
    {
      icon: 'assets/icons/studio/settings.svg',
      title: 'Настройки',
      route: 'settings',
    },
    {
      icon: 'assets/icons/studio/help.svg',
      title: 'Помощь',
      route: 'help',
    },
  ];

  click(option: MenuOption) {
    this.router.navigate(['studio', option.route]);
  }

  isActive(option: MenuOption): boolean {
    return option.route === this.router.url.split('/')[2];
  }
}

import { Component, OnInit } from '@angular/core';

interface Document {
  id: string;
  reg: string;
  createdAt: string;
  uin: string;
  name: string;
  identification: string;
  article: string;
  arrivedAt: string;
  leftAt: string;
  employer: string;
  region: string;
  business: string;
  coordinator: string;
  status: string;
}

@Component({
  selector: 'app-conclusions-journal',
  standalone: true,
  imports: [],
  templateUrl: './conclusions-journal.component.html',
  styleUrl: './conclusions-journal.component.scss',
})
export class ConclusionsJournalComponent implements OnInit {
  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.rows.push({
        id: `${i + 1}`,
        reg: 'Z-001',
        createdAt: '2024-11-15',
        uin: '040512501824',
        name: 'Нұрбек Болат',
        identification: '13291003',
        article: 'Статья 93',
        arrivedAt: '2024-11-15 - 22:30',
        leftAt: '2024-11-15 - 6:45',
        employer: 'SAP',
        region: 'Алматы',
        business: 'Да',
        coordinator: 'Петров П. П.',
        status: 'Согласовано',
      });
    }
  }

  rows: Document[] = [];

  search = [
    { placeholder: 'Регистрационный номер', type: 'text' },
    { type: 'datetime' },
    { placeholder: 'ИИН', type: 'text' },
    { placeholder: 'ФИО', type: 'text' },
    { placeholder: 'Номер УД', type: 'text' },
    { placeholder: 'Статус', type: 'text' },
    { placeholder: 'Регион', type: 'text' },
  ];

  table = {
    headers: [
      '#',
      'Рег. Номер',
      'Дата создания',
      'ИИН',
      'ФИО',
      'Номер УД',
      'Статья УК',
      'Время прихода',
      'Время ухода',
      'Место работы',
      'Регион',
      'Бизнес',
      'Согласующий',
      'Статус',
      'Действия',
    ],
  };

  values(obj: object): string[] {
    return Object.values(obj).slice(1);
  }
}

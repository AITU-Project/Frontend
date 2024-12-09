import { Component, inject, OnInit } from '@angular/core';
import { DocsService } from '../../../../core/services/documents/docs.service';

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
  private readonly docs = inject(DocsService);

  ngOnInit(): void {
    this.docs.findAll().subscribe({
      next: (response) => {
        response.data.forEach((conclusion, index) => {
          this.rows.push({
            id: (index + 1).toString(),
            reg: `${conclusion.id.slice(0, 7)}...`,
            createdAt: conclusion.registrationDate,
            uin: conclusion.defender[0].iin,
            name: conclusion.defender[0].name,
            identification: conclusion.called[0].pensionIin,
            article: conclusion.incident[0].article,
            arrivedAt: conclusion.called[0].arrivedAt
              .split('T')[1]
              .slice(0, -8),
            leftAt: conclusion.called[0].leftAt.split('T')[1].slice(0, -8),
            employer: conclusion.called[0].workplace,
            region: conclusion.region,
            business: conclusion.isBusinessRelated ? 'Да' : 'Нет',
            coordinator: conclusion.approvals[0].name,
            status: conclusion.status,
          });
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
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

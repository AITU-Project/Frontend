enum InputType {
  Text = 'text',
  TextArea = 'text-area',
  Date = 'date',
  Datetime = 'datetime',
  Select = 'select',
}

interface TextAreaInput {
  name: string;
  type: InputType.TextArea;
  value?: string;
  placeholder?: string;
}

interface TextInput {
  name: string;
  type: InputType.Text;
  value?: string;
  placeholder?: string;
}

interface DateInput {
  name: string;
  type: InputType.Date;
  value?: string;
}

interface DateTimeInput {
  name: string;
  type: InputType.Datetime;
  value?: string;
}

interface SelectInput {
  name: string;
  type: InputType.Select;
  options: string[];
  value?: string;
}

type Input =
  | TextInput
  | DateInput
  | DateTimeInput
  | SelectInput
  | TextAreaInput;

interface Section {
  title: string;
  inputs: Input[];
}

interface Document {
  sections: Section[];
}

export const DocumentTemplate: Document = {
  sections: [
    {
      title: 'Основная информация',
      inputs: [
        {
          name: 'Регистрационный номер',
          type: InputType.Text,
        },
        {
          name: 'Дата создания документа',
          type: InputType.Date,
        },
        {
          name: 'Номер УД (15 цифр)',
          type: InputType.Text,
        },
        {
          name: 'Статья УК',
          type: InputType.Text,
        },
        {
          name: 'Решение по делу',
          type: InputType.TextArea,
        },
        {
          name: 'Краткая фабула',
          type: InputType.TextArea,
        },
      ],
    },
    {
      title: 'Информация о вызываемом',
      inputs: [
        {
          name: 'ИИН вызываемого (12 цифр)',
          type: InputType.Text,
        },
        {
          name: 'ФИО вызываемого',
          type: InputType.Text,
        },
        {
          name: 'Место работы',
          type: InputType.Text,
        },
        {
          name: 'Должность вызываемого',
          type: InputType.Select,
          options: ['Инспектор', 'Следователь', 'Аналитик'],
        },
        {
          name: 'Регион',
          type: InputType.Select,
          options: ['Астана', 'Алматы', 'Шымкент'],
        },
        {
          name: 'Планируемые следственные действия',
          type: InputType.TextArea,
        },
      ],
    },
    {
      title: 'Информация о следственном действии',
      inputs: [
        {
          name: 'Дата и время проведения',
          type: InputType.Text,
        },
        {
          name: 'Место проведения',
          type: InputType.Select,
          options: ['Место проведения'],
        },
        {
          name: 'Следователь',
          type: InputType.Text,
        },
        {
          name: 'Статус по делу вызываемого',
          type: InputType.Select,
          options: [
            'Отказано',
            'В работе',
            'Оставлено без рассмотрения',
            'Отправлено на доработку',
            'На согласовании',
            'Согласовано',
          ],
        },
        {
          name: 'Отношение вызывающего к событию и субьекту',
          type: InputType.Text,
        },
        {
          name: 'Виды планируемого следствия',
          type: InputType.Select,
          options: [
            'Повторная экспертиза',
            'Дополнительная экспертиза',
            'Производство экспертизы',
            'Квалификация уголовных правонарушений',
          ],
        },
        {
          name: 'Относится-ли к бизнесу',
          type: InputType.Select,
          options: ['Да', 'Нет'],
        },
        {
          name: 'ИИН защитника (ручной ввод, ФЛК 12 цифр)',
          type: InputType.Text,
        },
        {
          name: 'ФИО защитника',
          type: InputType.Text,
        },
        {
          name: 'Обоснование и необходимость участия предпринимателя',
          type: InputType.Text,
        },
        {
          name: 'Результат от планируемого следственного действия',
          type: InputType.Text,
        },
      ],
    },
    {
      title: 'История вызовов',
      inputs: [
        {
          name: 'Предыдущий вызов по УД',
          type: InputType.Text,
        },
        {
          name: 'Кто вызывал',
          type: InputType.Text,
        },
        {
          name: 'Статус предыдущего вызова',
          type: InputType.Text,
        },
        {
          name: 'Время прихода',
          type: InputType.Datetime,
        },
        {
          name: 'Время ухода',
          type: InputType.Datetime,
        },
        {
          name: 'Причины и цели повторного вызова',
          type: InputType.Text,
        },
      ],
    },
    {
      title: 'Путь согласования заключения',
      inputs: [
        {
          name: 'Должность',
          type: InputType.Text,
        },
        {
          name: 'ФИО',
          type: InputType.Text,
        },
        {
          name: 'Статус согласования',
          type: InputType.Select,
          options: ['На доработку', 'Утверждено', 'Отказ'],
        },
        {
          name: 'Дата и время согласования',
          type: InputType.Datetime,
        },
        {
          name: 'Причины отправки на доработку/отказ/без рассмотрения',
          type: InputType.TextArea,
        },
      ],
    },
  ],
};

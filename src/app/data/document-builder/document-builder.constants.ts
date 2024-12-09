enum InputType {
  Text = 'text',
  TextArea = 'text-area',
  Date = 'date',
  Datetime = 'datetime',
  Select = 'select',
}

interface TextAreaInput {
  title: string;
  name?: string;
  type: InputType.TextArea;
  value?: string;
  placeholder?: string;
}

interface TextInput {
  title: string;
  name?: string;
  type: InputType.Text;
  value?: string;
  placeholder?: string;
}

interface DateInput {
  title: string;
  name?: string;
  type: InputType.Date;
  value?: string;
}

interface DateTimeInput {
  title: string;
  name?: string;
  type: InputType.Datetime;
  value?: string;
}

interface SelectInput {
  title: string;
  name?: string;
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
          title: 'Регистрационный номер',
          type: InputType.Text,
          name: 'regNumber',
        },
        {
          title: 'Дата создания документа',
          type: InputType.Date,
        },
        {
          title: 'Номер УД (15 цифр)',
          type: InputType.Text,
        },
        {
          title: 'Статья УК',
          type: InputType.Text,
        },
        {
          title: 'Решение по делу',
          type: InputType.TextArea,
        },
        {
          title: 'Краткая фабула',
          type: InputType.TextArea,
        },
      ],
    },
    {
      title: 'Информация о вызываемом',
      inputs: [
        {
          title: 'ИИН вызываемого (12 цифр)',
          type: InputType.Text,
        },
        {
          title: 'ФИО вызываемого',
          type: InputType.Text,
        },
        {
          title: 'Место работы',
          type: InputType.Text,
        },
        {
          title: 'Должность вызываемого',
          type: InputType.Select,
          options: ['Инспектор', 'Следователь', 'Аналитик'],
        },
        {
          title: 'Регион',
          type: InputType.Select,
          options: ['Астана', 'Алматы', 'Шымкент'],
        },
        {
          title: 'Планируемые следственные действия',
          type: InputType.TextArea,
        },
      ],
    },
    {
      title: 'Информация о следственном действии',
      inputs: [
        {
          title: 'Дата и время проведения',
          type: InputType.Text,
        },
        {
          title: 'Место проведения',
          type: InputType.Select,
          options: ['Место проведения'],
        },
        {
          title: 'Следователь',
          type: InputType.Text,
        },
        {
          title: 'Статус по делу вызываемого',
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
          title: 'Отношение вызывающего к событию и субьекту',
          type: InputType.Text,
        },
        {
          title: 'Виды планируемого следствия',
          type: InputType.Select,
          options: [
            'Повторная экспертиза',
            'Дополнительная экспертиза',
            'Производство экспертизы',
            'Квалификация уголовных правонарушений',
          ],
        },
        {
          title: 'Относится-ли к бизнесу',
          type: InputType.Select,
          options: ['Да', 'Нет'],
        },
        {
          title: 'ИИН защитника (ручной ввод, ФЛК 12 цифр)',
          type: InputType.Text,
        },
        {
          title: 'ФИО защитника',
          type: InputType.Text,
        },
        {
          title: 'Обоснование и необходимость участия предпринимателя',
          type: InputType.Text,
        },
        {
          title: 'Результат от планируемого следственного действия',
          type: InputType.Text,
        },
      ],
    },
    {
      title: 'История вызовов',
      inputs: [
        {
          title: 'Предыдущий вызов по УД',
          type: InputType.Text,
        },
        {
          title: 'Кто вызывал',
          type: InputType.Text,
        },
        {
          title: 'Статус предыдущего вызова',
          type: InputType.Text,
        },
        {
          title: 'Время прихода',
          type: InputType.Datetime,
        },
        {
          title: 'Время ухода',
          type: InputType.Datetime,
        },
        {
          title: 'Причины и цели повторного вызова',
          type: InputType.Text,
        },
      ],
    },
    {
      title: 'Путь согласования заключения',
      inputs: [
        {
          title: 'Должность',
          type: InputType.Text,
        },
        {
          title: 'ФИО',
          type: InputType.Text,
        },
        {
          title: 'Статус согласования',
          type: InputType.Select,
          options: ['На доработку', 'Утверждено', 'Отказ'],
        },
        {
          title: 'Дата и время согласования',
          type: InputType.Datetime,
        },
        {
          title: 'Причины отправки на доработку/отказ/без рассмотрения',
          type: InputType.TextArea,
        },
      ],
    },
  ],
};

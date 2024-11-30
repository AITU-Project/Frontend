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
  value: string;
}

interface TextInput {
  name: string;
  type: InputType.Text;
  value: string;
}

interface DateInput {
  name: string;
  type: InputType.Date;
  value: string;
}

interface DateTimeInput {
  name: string;
  type: InputType.Datetime;
  value: string;
}

interface SelectInput {
  name: string;
  type: InputType.Select;
  options: string[];
  value: string;
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
          value: '',
        },
        {
          name: 'Дата создания документа',
          type: InputType.Date,
          value: '',
        },
        {
          name: 'Номер УД (15 цифр)',
          type: InputType.Text,
          value: '',
        },
        {
          name: 'Статья УК',
          type: InputType.Text,
          value: '',
        },
      ],
    },
  ],
};

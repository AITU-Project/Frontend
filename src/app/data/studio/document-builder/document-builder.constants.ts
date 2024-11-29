enum InputType {
  Text = 'text',
  Date = 'date',
  Datetime = 'datetime',
  Select = 'select',
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

type Input = TextInput | DateInput | DateTimeInput | SelectInput;

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
      ],
    },
  ],
};

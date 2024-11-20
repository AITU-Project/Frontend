import { useEffect, useState } from 'react';
import validator from 'validator';

import { RegistrationFormProps } from '../../../types';
import { Button } from '../../buttons';
import { Input, RadioButtonGroup } from '../../inputs';
import styles from './ProfileForm.module.css';

interface FormValues {
  name: string;
  surname: string;
  email: string;
  sex: string;
  password: string;
  repeatPassword: string;
}

type NoteStore = Record<keyof FormValues, string[]>;

export function ProfileForm(props: Readonly<RegistrationFormProps>) {
  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
    sex: '',
    password: '',
    repeatPassword: '',
  } as FormValues);

  const [notes, setNotes] = useState({
    name: [],
    surname: [],
    email: [],
    sex: [],
    password: [],
    repeatPassword: [],
  } as NoteStore);

  const validate = (strict: boolean): boolean => {
    const newNotes: NoteStore = {
      name: [],
      surname: [],
      email: [],
      sex: [],
      password: [],
      repeatPassword: [],
    };

    if ((strict || notes.name.length != 0) && validator.isEmpty(values.name)) {
      newNotes.name.push('* Не должно быть пустым');
    }

    if (
      (strict || notes.surname.length != 0) &&
      validator.isEmpty(values.surname)
    ) {
      newNotes.surname.push('* Не должно быть пустым');
    }

    if (
      (strict || notes.email.length != 0 || !validator.isEmpty(values.email)) &&
      !validator.isEmail(values.email)
    ) {
      newNotes.email.push('* Это не электронная почта');
    }

    if ((strict || notes.sex.length != 0) && validator.isEmpty(values.sex)) {
      newNotes.sex.push('* Укажите свой пол');
    }

    if (
      (strict ||
        notes.password.length != 0 ||
        !validator.isEmpty(values.password)) &&
      !validator.isStrongPassword(values.password)
    ) {
      newNotes.password.push('* Введите сложный пароль');
    }

    if (values.repeatPassword !== values.password) {
      newNotes.repeatPassword.push('* Пароли не совпадают');
    }

    setNotes(newNotes);
    return Object.values(newNotes).some((values) => values.length != 0);
  };

  useEffect(() => {
    validate(false);
  }, [values]);

  const patchValues = (newValues: Partial<FormValues>) => {
    setValues({ ...values, ...newValues });
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Добро пожаловать</h1>
        <div className={styles.inputs}>
          <Input
            type="text"
            name="name"
            label="Имя"
            notes={notes.name}
            required
            onChange={(event) => {
              patchValues({ name: event.target.value });
            }}
          />
          <Input
            type="text"
            name="surname"
            label="Фамилия"
            notes={notes.surname}
            required
            onChange={(event) => {
              patchValues({ surname: event.target.value });
            }}
          />
          <Input
            type="text"
            name="email"
            label="Email"
            notes={notes.email}
            required
            onChange={(event) => {
              patchValues({ email: event.target.value });
            }}
          />
          <RadioButtonGroup
            name="sex"
            label="Пол"
            placement="rows"
            notes={notes.sex}
            options={[
              { title: 'Мужской', value: 'male' },
              { title: 'Женский', value: 'female' },
            ]}
            onChange={(event) => {
              patchValues({ sex: event.target.value });
            }}
          />
          <Input
            type="password"
            name="password"
            label="Новый пароль"
            notes={notes.password}
            required
            onChange={(event) => {
              patchValues({ password: event.target.value });
            }}
          />
          <Input
            type="password"
            name="repeat-password"
            notes={notes.repeatPassword}
            label="Повторите пароль"
            required
            onChange={(event) => {
              patchValues({ repeatPassword: event.target.value });
            }}
          />
        </div>
      </div>
      <Button
        title="Продолжить"
        onClick={() => {
          if (validate(true)) {
            return;
          }

          props.patchDto({
            name: values.name,
            surname: values.surname,
            email: values.email,
            password: values.password,
            sex: values.sex,
          });
          props.nextStep();
        }}
      />
    </>
  );
}

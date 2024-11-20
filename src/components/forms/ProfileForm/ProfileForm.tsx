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

  useEffect(() => {
    const notes: NoteStore = {
      name: [],
      surname: [],
      email: [],
      sex: [],
      password: [],
      repeatPassword: [],
    };

    if (values.name === '') {
      notes.name.push('* Поле "Имя" не должно быть пустым');
    }

    if (values.surname === '') {
      notes.surname.push('* Поле "Фамилия" не должно быть пустым');
    }

    if (validator.isEmail(values.email)) {
      notes.email.push('* Введите адрес электронной почты');
    }

    setNotes(notes);
  }, [values]);

  const patchValues = (newValues: Partial<FormValues>) => {
    setValues({ ...values, ...newValues });
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Добро пожаловать</h1>
        <div className={styles.inputs}>
          <div className={styles.row}>
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
          </div>
          <div className={styles.row}>
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
          </div>
          <div className={styles.row}>
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
      </div>
      <Button
        title="Продолжить"
        onClick={() => {
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

import { useEffect, useState } from 'react';
import validator from 'validator';

import { CreateUserDTO, RegistrationFormProps } from '../../../types';
import { Button } from '../../buttons';
import { Input, RadioButtonGroup } from '../../inputs';
import styles from './EmployeeForm.module.css';

interface FormValues {
  role: string;
  region: string;
}

type NoteStore = Record<keyof FormValues, string[]>;

export function EmployeeForm(props: Readonly<RegistrationFormProps>) {
  const [values, setValues] = useState({ region: '', role: '' } as FormValues);
  const [notes, setNotes] = useState({ region: [], role: [] } as NoteStore);

  const patchValues = (newValues: Partial<FormValues>) => {
    setValues({ ...values, ...newValues });
  };

  const validate = (strict: boolean): boolean => {
    const newNotes = { role: [], region: [] } as NoteStore;

    if (
      (strict || notes.region.length != 0) &&
      validator.isEmpty(values.region)
    ) {
      newNotes.region.push('* Укажите регион');
    }

    if ((strict || notes.role.length != 0) && validator.isEmpty(values.role)) {
      newNotes.role.push('* Укажите свою роль');
    }

    setNotes(newNotes);
    return Object.values(newNotes).some((values) => values.length != 0);
  };

  useEffect(() => {
    validate(false);
  }, [values]);

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.texts}>
          <h1 className={styles.title}>Выбор роли и Регион</h1>
          <span className={styles.subtitle}>
            Чтобы завершить регистрацию, выберите роль и регион
          </span>
        </div>
        <div className={styles.inputs}>
          <RadioButtonGroup
            name="role"
            label="Роль"
            options={[
              { title: 'Сотрудник', value: 'employee' },
              { title: 'Аналитик', value: 'analytics' },
              { title: 'Модератор', value: 'moderator' },
            ]}
            placement="columns"
            notes={notes.role}
            onChange={(event) => {
              patchValues({ role: event.target.value });
            }}
          />
          <Input
            type="text"
            name="region"
            label="Регион"
            required
            notes={notes.region}
            onChange={(event) => {
              patchValues({ region: event.target.value });
            }}
          />
        </div>
      </div>
      <Button
        title="Подтвердить"
        onClick={() => {
          if (validate(true)) {
            return;
          }

          const workValues = {
            role: values.role,
            region: values.region,
          };

          const dto = props.patchDto(workValues);
          props.submitRequest({ ...dto, ...workValues } as CreateUserDTO);
        }}
      />
    </>
  );
}

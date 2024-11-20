import { useState } from 'react';

import { CreateUserDTO, RegistrationFormProps } from '../../../types';
import { Button } from '../../buttons';
import { Input, RadioButtonGroup } from '../../inputs';
import styles from './EmployeeForm.module.css';

interface FormValues {
  role: string;
  region: string;
}

export function EmployeeForm(props: Readonly<RegistrationFormProps>) {
  const [values, setValues] = useState({} as FormValues);

  const patchValues = (newValues: Partial<FormValues>) => {
    setValues({ ...values, ...newValues });
  };

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
            onChange={(event) => {
              patchValues({ role: event.target.value });
            }}
          />
          <Input
            type="text"
            name="region"
            label="Регион"
            required
            onChange={(event) => {
              patchValues({ region: event.target.value });
            }}
          />
        </div>
      </div>
      <Button
        title="Подтвердить"
        onClick={() => {
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

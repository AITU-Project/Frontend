import { useState } from 'react';

import { RegistrationStepProps } from '../../pages/Registration/Registration';
import { CreateUserDTO } from '../../types';
import { Button } from '../Button';
import { Input } from '../Input';
import { RadioButtonGroup } from '../RadioButtonGroup';
import styles from './RegistrationStepWork.module.css';

interface WorkValues {
  role: string;
  region: string;
}

export function RegistrationStepWork(props: Readonly<RegistrationStepProps>) {
  const [values, setValues] = useState({} as WorkValues);

  const patchValues = (newValues: Partial<WorkValues>) => {
    setValues({ ...values, ...newValues });
  };

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>Выбор роли и Регион</h1>
          <span className={styles.subtitle}>
            Чтобы завершить регистрацию, выберите роль и регион
          </span>
        </div>
        <div className={styles.inputsContainer}>
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

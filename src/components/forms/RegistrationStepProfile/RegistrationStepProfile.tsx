import { useState } from 'react';

import { RegistrationStepProps } from '../../../types';
import { Button } from '../../buttons';
import { Input, RadioButtonGroup } from '../../inputs';
import styles from './RegistrationStepProfile.module.css';

interface ProfileValues {
  name: string;
  surname: string;
  email: string;
  sex: string;
  password: string;
  repeatPassword: string;
}

export function RegistrationStepProfile(
  props: Readonly<RegistrationStepProps>
) {
  const [values, setValues] = useState({} as ProfileValues);

  const patchValues = (newValues: Partial<ProfileValues>) => {
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
              required
              onChange={(event) => {
                patchValues({ name: event.target.value });
              }}
            />
            <Input
              type="text"
              name="surname"
              label="Фамилия"
              required
              onChange={(event) => {
                patchValues({ surname: event.target.value });
              }}
            />
          </div>
          <div className={styles.inputsRow}>
            <Input
              type="text"
              name="email"
              label="Email"
              required
              onChange={(event) => {
                patchValues({ email: event.target.value });
              }}
            />
            <RadioButtonGroup
              name="sex"
              label="Пол"
              placement="rows"
              options={[
                { title: 'Мужской', value: 'male' },
                { title: 'Женский', value: 'female' },
              ]}
              onChange={(event) => {
                patchValues({ sex: event.target.value });
              }}
            />
          </div>
          <div className={styles.inputsRow}>
            <Input
              type="password"
              name="password"
              label="Новый пароль"
              required
              onChange={(event) => {
                patchValues({ password: event.target.value });
              }}
            />
            <Input
              type="password"
              name="repeat-password"
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

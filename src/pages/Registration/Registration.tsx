import { ChangeEvent, useState } from 'react';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { RadioButton } from '../../components/RadioButton';
import styles from './Registration.module.css';

function Registration() {
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Добро пожаловать</h1>
          <div className={styles.inputsContainer}>
            <div className={styles.leftInputsContainer}>
              <Input type="text" name="email" label="Имя" required />
              <Input type="password" name="password" label="Email" required />
              <Input
                type="password"
                name="password"
                label="Новый пароль"
                required
              />
            </div>
            <div className={styles.rightInputsContainer}>
              <Input type="password" name="password" label="Фамилия" required />
              <label className={styles.radioLabel}>Пол</label>
              <div className={styles.radioContainer}>
                <RadioButton
                  name="gender"
                  label="Мужской"
                  value="option1"
                  checked={selectedOption === 'option1'}
                  onChange={handleRadioChange}
                />
                <RadioButton
                  name="gender"
                  label="Женский"
                  value="option2"
                  checked={selectedOption === 'option2'}
                  onChange={handleRadioChange}
                />
              </div>
              <Input
                type="password"
                name="password"
                label="Повторите пароль"
                required
              />
            </div>
          </div>
        </div>
        <div className={styles.rightFormContainer}></div>
        <Button title="Войти" onClick={() => {}} />
      </div>
    </div>
  );
}
export default Registration;

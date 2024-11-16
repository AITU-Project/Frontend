import { useEffect, useState } from 'react';
import validator from 'validator';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input/Input';
import { TextButton } from '../../components/TextButton';
import styles from './Auth.module.css';

function Auth() {
  const [emailNotes, setEmailNotes] = useState([] as string[]);
  const [passwordNotes, setPasswordNotes] = useState([] as string[]);

  useEffect(() => {
    document.title = 'Войти в аккаунт';
  }, []);

  const validateEmail = (
    event: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    const value = event.target.value;

    if (!validator.isEmail(value)) {
      setEmailNotes(['Введите нормальную почту сука!']);
    } else {
      setEmailNotes([]);
    }
  };

  const validatePassword = (
    event: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    const value = event.target.value;

    if (value.length < 8) {
      setPasswordNotes(['Пароль не должен быть меньше 8 символов']);
    } else {
      setPasswordNotes([]);
    }
  };

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Логин</h1>
          <div className={styles.inputsContainer}>
            <Input
              type="text"
              name="email"
              label="Email"
              required
              notes={emailNotes}
              onChange={validateEmail}
            />
            <Input
              type="password"
              name="password"
              label="Пароль"
              required
              notes={passwordNotes}
              onChange={validatePassword}
            />
          </div>
        </div>
        <Button title="Войти" onClick={() => {}} />
        <div className={styles.footer}>
          <TextButton title="Забыли пароль?" onClick={() => {}} />
          <span>|</span>
          <TextButton title="Регистрация" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default Auth;

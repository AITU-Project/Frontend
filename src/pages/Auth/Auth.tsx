import { useInjection } from 'inversify-react';
import { useEffect, useState } from 'react';
import validator from 'validator';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input/Input';
import { TextButton } from '../../components/TextButton';
import { IAuthService, TYPES } from '../../types';
import styles from './Auth.module.css';

function Auth() {
  const [emailNotes, setEmailNotes] = useState([] as string[]);
  const [passwordNotes, setPasswordNotes] = useState([] as string[]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authService = useInjection<IAuthService>(TYPES.AuthService);

  useEffect(() => {
    document.title = 'Войти в аккаунт';
  }, []);

  const validateEmail = (value: string): boolean => {
    const valid = validator.isEmail(value);

    if (!valid) {
      setEmailNotes(['* Введите электронную почту']);
    } else {
      setEmailNotes([]);
    }

    setEmail(value);
    return valid;
  };

  const validatePassword = (value: string): boolean => {
    const valid = value.length >= 8 && value.length < 50;

    if (!valid) {
      setPasswordNotes(['* Пароль не должен быть меньше 8 символов']);
    } else {
      setPasswordNotes([]);
    }

    setPassword(value);
    return valid;
  };

  const login = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    authService.login(email, password);
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
              onChange={(event) => {
                validateEmail(event.target.value);
              }}
            />
            <Input
              type="password"
              name="password"
              label="Пароль"
              required
              notes={passwordNotes}
              onChange={(event) => {
                validatePassword(event.target.value);
              }}
            />
          </div>
        </div>
        <Button title="Войти" onClick={login} />
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

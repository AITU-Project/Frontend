import { Button } from '../../components/Button';
import { Input } from '../../components/Input/Input';
import { TextButton } from '../../components/TextButton';
import styles from './Auth.module.css';

function Auth() {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Логин</h1>
          <div className={styles.inputsContainer}>
            <Input type="text" name="email" label="Email" required notes={[]} />
            <Input
              type="password"
              name="password"
              label="Пароль"
              required
              notes={[]}
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

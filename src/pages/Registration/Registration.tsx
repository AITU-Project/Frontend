import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { RadioButton } from '../../components/RadioButton';
import styles from './Registration.module.css';

function Registration() {
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
                <RadioButton name="gender" label="Мужской" />
                <RadioButton name="gender" label="Женский" />
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

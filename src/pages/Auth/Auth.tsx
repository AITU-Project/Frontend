import { Button } from '../../components/Button';
import styles from './Auth.module.css';

function Auth() {
  return (
    <body className={styles.bodyContainer}>
      <div className={styles.loginContainer}>
        <h1 className={styles.heading}>Логин</h1>
        <form>
          <div className={styles.formField}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input type="email" id="email" required className={styles.input} />
          </div>
          <div className={styles.formField}>
            <label htmlFor="password" className={styles.label}>
              Пароль
            </label>
            <input
              type="password"
              id="password"
              required
              className={styles.input}
            />
          </div>
          <Button title="Войти" onClick={() => {}}></Button>
        </form>
        <div className={styles.footer}>
          <button>Забыли пароль?</button>
          <div className={styles.verticalLine}></div>
          <button>Регистрация</button>
        </div>
      </div>
    </body>
  );
}

export default Auth;

import logo from '../../assets/images/logo.svg';
import styles from './SpiningAppLogo.module.css';

export function SpiningAppLogo() {
  return (
    <header className={styles.appHeader}>
      <img src={logo} className={styles.appLogo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className={styles.appLink}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

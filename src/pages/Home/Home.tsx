import { Button } from '../../components/Button';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.app}>
      <Button
        title="Войти"
        onClick={() => {
          console.log('I was clicked');
        }}
      ></Button>
    </div>
  );
}

export default Home;

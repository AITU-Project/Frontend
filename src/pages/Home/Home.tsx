import { SpiningAppLogo } from '../../components/SpiningAppLogo';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.app}>
      <SpiningAppLogo />
    </div>
  );
}

export default Home;

import { Button } from '../../components/Button';
import { SidePanel } from '../../components/SidePanel';
import style from './Studio.module.css';

function Studio() {
  return (
    <div className={style.main}>
      <SidePanel />
      <Button title="Войти" onClick={() => {}} />
    </div>
  );
}

export default Studio;

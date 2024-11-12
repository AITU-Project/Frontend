import { Input } from '../../components/Input/Input';
import { SidePanel } from '../../components/SidePanel';
import style from './Studio.module.css';

function Studio() {
  return (
    <div className={style.main}>
      <SidePanel />
      <Input
        placeholder="Введите почту"
        label="Email"
        notes="Напишите корректно"
        onBlur={() => {
          console.log('Hello World!');
        }}
      />
    </div>
  );
}

export default Studio;

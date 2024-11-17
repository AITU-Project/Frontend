import style from './SectionInput.module.css';

type SectionInputTypes = 'text' | 'date' | 'datetime-local';

interface SectionInputProps {
  label: string;
  type: SectionInputTypes;
  name: string;
}

export function SectionInput(props: Readonly<SectionInputProps>) {
  return (
    <div className={style.container}>
      <label className={style.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input className={style.input} type={props.type} />
    </div>
  );
}

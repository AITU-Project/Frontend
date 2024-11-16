import style from './SectionInput.module.css';

type SectionInputTypes = 'text';

interface SectionInputProps {
  label: string;
  type: SectionInputTypes;
}

export function SectionInput(props: Readonly<SectionInputProps>) {
  return (
    <div className={style.container}>
      <label className={style.label} htmlFor="">
        {props.label}
      </label>
      <input className={style.input} type={props.type} />
    </div>
  );
}

import style from './SectionInput.module.css';

type SectionInputTypes = 'text' | 'date' | 'datetime-local';

interface SectionInputProps {
  label: string;
  type: SectionInputTypes;
  name: string;
  min?: string;
  max?: string;
}

const DEFAULT_MIN_DATE = '1990-01-01';
const DEFAULT_MAX_DATE = '1990-01-01T00:00';

const DEFAULT_MIN_DATETIME = '2024-12-31';
const DEFAULT_MAX_DATETIME = '2024-12-31T23:59';

export function SectionInput(props: Readonly<SectionInputProps>) {
  const DEFAULT_MIN =
    props.type === 'date' ? DEFAULT_MIN_DATE : DEFAULT_MIN_DATETIME;

  const DEFAULT_MAX =
    props.type === 'date' ? DEFAULT_MAX_DATE : DEFAULT_MAX_DATETIME;

  const min = props.min ? props.min : DEFAULT_MIN;
  const max = props.max ? props.max : DEFAULT_MAX;

  return (
    <div className={style.container}>
      <label className={style.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input className={style.input} type={props.type} min={min} max={max} />
    </div>
  );
}

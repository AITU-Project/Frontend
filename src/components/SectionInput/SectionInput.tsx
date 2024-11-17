import style from './SectionInput.module.css';

type SectionInputTypes = 'text' | 'date' | 'datetime-local';

interface SectionInputProps {
  label: string;
  type: SectionInputTypes;
  name: string;
  min?: string;
  max?: string;
}

export function SectionInput(props: Readonly<SectionInputProps>) {
  return (
    <div className={style.container}>
      <label className={style.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={style.input}
        type={props.type}
        min={
          props.min
            ? props.min
            : props.type === 'date'
              ? '1990-01-01'
              : '1990-01-01T00:00'
        }
        max={
          props.max
            ? props.max
            : props.type === 'date'
              ? '2024-12-31'
              : '2024-12-31T23:59'
        }
      />
    </div>
  );
}

import style from './SectionSelect.module.css';

interface SectionSelectProps {
  name: string;
  options: string[];
  placeholder: string;
  label?: string;
}

export function SectionSelect(props: Readonly<SectionSelectProps>) {
  return (
    <div className={style.container}>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <select name={props.name} className={style.select}>
        <option value="">{props.placeholder}</option>

        {props.options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

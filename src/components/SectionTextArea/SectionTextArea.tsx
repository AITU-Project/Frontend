import style from './SectionTextArea.module.css';

interface SectionTextAreaProps {
  label: string;
  name: string;
}

export function SectionTextArea(props: Readonly<SectionTextAreaProps>) {
  return (
    <div className={style.container}>
      <label className={style.label} htmlFor={props.name}>
        {props.label}
      </label>
      <textarea
        className={style.textarea}
        name={props.name}
        id={props.name}
      ></textarea>
    </div>
  );
}

import { ChangeEventHandler, FocusEventHandler } from 'react';

import style from './Input.module.css';

interface InputProps {
  placeholder?: string;
  name?: string;
  value?: string;
  label?: string;
  notes?: string[];
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function Input(props: InputProps) {
  return (
    <div className={style.container}>
      {props.label !== undefined && (
        <label className={style.label} htmlFor={props.name}>
          {props.label}
        </label>
      )}
      <input
        name={props.name}
        className={style.input}
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
      {props.notes !== undefined && (
        <>
          {props.notes.map((note) => (
            <span key={note} className={style.notes}>
              {note}
            </span>
          ))}
        </>
      )}
    </div>
  );
}

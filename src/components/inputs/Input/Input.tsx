import { ChangeEventHandler, FocusEventHandler } from 'react';

import style from './Input.module.css';

type InputType = 'text' | 'password';

interface InputProps {
  type: InputType;
  label?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  notes?: string[];
  required?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function Input(props: Readonly<InputProps>) {
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
        type={props.type}
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

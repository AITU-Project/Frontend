import { ChangeEventHandler } from 'react';

import styles from './RadioButton.module.css';

interface RadioButtonProps {
  label?: string;
  name?: string;
  value?: string;
  notes?: string[];
  required?: boolean;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function RadioButton(props: Readonly<RadioButtonProps>) {
  return (
    <div className={styles.container}>
      <label className={styles.radioLabel}>
        <input
          className={styles.radioInput}
          type="radio"
          name={props.name}
          value={props.value}
          checked={props.checked}
          onChange={props.onChange}
        />
        {props.label}
      </label>
      {props.notes !== undefined && (
        <>
          {props.notes.map((note) => (
            <span key={note} className={styles.notes}>
              {note}
            </span>
          ))}
        </>
      )}
    </div>
  );
}

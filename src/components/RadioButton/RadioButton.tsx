import { ChangeEventHandler } from 'react';

import styles from './RadioButton.module.css';

interface RadioButtonProps {
  label?: string;
  options: string;
  name?: string;
  value?: string;
  notes?: string[];
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function RadioButton(props: Readonly<RadioButtonProps>) {
  return (
    <div>
      {props.label !== undefined && (
        <label className={styles.label} htmlFor={props.name}>
          {props.label}
        </label>
      )}
      <input type="radio" name={props.name}>
        {props.options}
      </input>
    </div>
  );
}

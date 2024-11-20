import { ChangeEventHandler } from 'react';

import styles from './RadioButton.module.css';

interface RadioButtonProps {
  title?: string;
  name?: string;
  value?: string;

  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function RadioButton(props: Readonly<RadioButtonProps>) {
  return (
    <div className={styles.container}>
      <label className={styles.radio}>
        <input
          className={styles.radioInput}
          type="radio"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
        {props.title}
      </label>
    </div>
  );
}

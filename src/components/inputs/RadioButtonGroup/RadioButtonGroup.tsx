import { ChangeEventHandler } from 'react';

import { combineStyles } from '../../../utils';
import { RadioButton } from '../../inputs';
import style from './RadioButtonGroup.module.css';

type RadioPlacement = 'rows' | 'columns';

interface RadioButtonPropsInterface {
  title: string;
  value: string;
}

interface RadioButtonGroupProps {
  name: string;
  options: RadioButtonPropsInterface[];
  placement: RadioPlacement;
  label?: string;
  notes?: string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function RadioButtonGroup(props: Readonly<RadioButtonGroupProps>) {
  return (
    <div className={style.container}>
      {props.label !== undefined && (
        <label className={style.label} htmlFor={props.name}>
          {props.label}
        </label>
      )}
      <div
        className={combineStyles([
          style.buttons,
          props.placement === 'rows' ? style.rows : style.columns,
        ])}
      >
        {props.options.map((option) => (
          <RadioButton
            key={option.value}
            title={option.title}
            value={option.value}
            name={props.name}
            onChange={props.onChange}
          />
        ))}
      </div>
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

import { MouseEventHandler } from 'react';

import style from './Button.module.css';

interface ButtonProps {
  title: string;
  onClick: MouseEventHandler;
}

export function Button(props: ButtonProps) {
  return (
    <button className={style.button} onClick={props.onClick}>
      {props.title}
    </button>
  );
}

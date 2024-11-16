import { MouseEventHandler } from 'react';

import style from './TextButton.module.css';

interface TextButtonProps {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function TextButton(props: Readonly<TextButtonProps>) {
  return (
    <button className={style.button} onClick={props.onClick}>
      {props.title}
    </button>
  );
}

import { MouseEventHandler } from 'react';

import { combineStyles } from '../../../utils';
import style from './SectionButton.module.css';

type SectionButtonType = 'yellow' | 'green';

interface SectionButtonProps {
  title: string;
  type: SectionButtonType;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function SectionButton(props: Readonly<SectionButtonProps>) {
  return (
    <button
      className={combineStyles([style.button, style[props.type]])}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

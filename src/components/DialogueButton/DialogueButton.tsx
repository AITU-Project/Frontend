import { MouseEventHandler } from 'react';

import { combineStyles } from '../../utils/combineStyleClasses';
import style from './DialogueButton.module.css';

type DialogueButtonType = 'red' | 'normal';

interface DialogueButtonProps {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: DialogueButtonType;
}

export function DialogueButton(props: Readonly<DialogueButtonProps>) {
  const buttonStylesMap: Map<DialogueButtonType, string> = new Map([
    ['red', style.redButton],
    ['normal', style.normalButton],
  ]);

  return (
    <button
      onClick={props.onClick}
      className={combineStyles([
        style.dialogueButton,
        buttonStylesMap.get(props.type ?? 'normal')!,
      ])}
    >
      {props.title}
    </button>
  );
}

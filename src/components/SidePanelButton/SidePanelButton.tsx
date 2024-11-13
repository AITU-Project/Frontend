import { MouseEventHandler } from 'react';

import style from './SidePanelButton.module.css';

interface SidePanelButtonProps {
  title: string;
  icon: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function SidePanelButton(props: Readonly<SidePanelButtonProps>) {
  return (
    <button className={style.sidePanelButton}>
      <img
        className={style.sidePanelButtonIcon}
        src={props.icon}
        alt={props.icon}
      />
      <span className={style.sidePanelButtonTitle}>{props.title}</span>
    </button>
  );
}

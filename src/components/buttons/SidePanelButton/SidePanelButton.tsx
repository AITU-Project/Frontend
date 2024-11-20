import { MouseEventHandler } from 'react';

import { combineStyles } from '../../../utils/combineStyleClasses';
import style from './SidePanelButton.module.css';

interface SidePanelButtonProps {
  title: string;
  icon: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActiveTab?: boolean;
}

export function SidePanelButton(props: Readonly<SidePanelButtonProps>) {
  return (
    <button onClick={props.onClick} className={style.sidePanelButton}>
      {props.isActiveTab && (
        <div
          className={combineStyles([style.activeTab, style.leftActiveTab])}
        ></div>
      )}
      <img
        className={style.sidePanelButtonIcon}
        src={props.icon}
        alt={props.icon}
      />
      <span className={style.sidePanelButtonTitle}>{props.title}</span>
      {props.isActiveTab && (
        <div
          className={combineStyles([style.activeTab, style.rightActiveTab])}
        ></div>
      )}
    </button>
  );
}

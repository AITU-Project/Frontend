import { MouseEventHandler, ReactElement } from 'react';

import logo from '../../../../assets/images/logo.png';
import { SidePanelButton } from '../../../buttons';
import style from './SidePanel.module.css';

export interface SidePanelTabProps {
  title: string;
  icon: string;
  content?: ReactElement;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

interface SidePanelProps {
  tabs: SidePanelTabProps[];
  hidden?: boolean;
  active?: number;
}

export function SidePanel(props: Readonly<SidePanelProps>) {
  if (props.hidden) return null;

  return (
    <div className={style.sidePanel}>
      <div className={style.sidePanelHeader}>
        <img src={logo} alt="logo" className={style.sidePanelLogo} />
        <span className={style.sidePanelTitle}>
          Автоматизация <br />
          повесток и вызовов
        </span>
      </div>

      <div className={style.sidePanelBody}>
        {props.tabs.map((tab: SidePanelTabProps, index: number) => (
          <SidePanelButton
            key={tab.title}
            title={tab.title}
            icon={tab.icon}
            onClick={tab.onClick}
            isActiveTab={index === props.active}
          />
        ))}
      </div>
    </div>
  );
}

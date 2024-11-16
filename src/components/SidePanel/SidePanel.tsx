import { MouseEventHandler } from 'react';

import logo from '../../assets/images/logo.png';
import { SidePanelButton } from '../SidePanelButton';
import style from './SidePanel.module.css';

export interface SidePanelTabProps {
  title: string;
  icon: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

interface SidePanelProps {
  hidden?: boolean;
  tabs: SidePanelTabProps[];
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
        {props.tabs.map((tab: SidePanelTabProps) => (
          <SidePanelButton
            key={tab.title}
            title={tab.title}
            icon={tab.icon}
            onClick={tab.onClick}
          />
        ))}
      </div>
    </div>
  );
}

import logo from '../../assets/images/logo.png';
import addDocument from '../../assets/images/side-panel/add-document.svg';
import identification from '../../assets/images/side-panel/identification.svg';
import menu from '../../assets/images/side-panel/menu.svg';
import profile from '../../assets/images/side-panel/profile.svg';
import question from '../../assets/images/side-panel/question.svg';
import settings from '../../assets/images/side-panel/settings.svg';
import signIn from '../../assets/images/side-panel/sign-in.svg';
import { SidePanelButton } from '../SidePanelButton';
import style from './SidePanel.module.css';

export function SidePanel() {
  const sidePanelContentMap: Map<string, string> = new Map([
    ['Реестр повесток и вызовов', identification],
    ['Создание заключения', addDocument],
    ['Журнал заключений', menu],
    ['Профиль', profile],
    ['Настройки', settings],
    ['Помощь', question],
    ['Вход', signIn],
  ]);

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
        {Array.from(sidePanelContentMap.keys()).map((key: string) => (
          <SidePanelButton
            key={key}
            title={key}
            icon={sidePanelContentMap.get(key)!}
            onClick={() => {}}
          ></SidePanelButton>
        ))}
      </div>
    </div>
  );
}

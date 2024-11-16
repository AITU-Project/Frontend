import addDocument from '../../assets/images/side-panel/add-document.svg';
import identification from '../../assets/images/side-panel/identification.svg';
import menu from '../../assets/images/side-panel/menu.svg';
import profile from '../../assets/images/side-panel/profile.svg';
import question from '../../assets/images/side-panel/question.svg';
import settings from '../../assets/images/side-panel/settings.svg';
import signIn from '../../assets/images/side-panel/sign-in.svg';
import { CreateConclusion } from '../../components/CreateConclusion';
import { SidePanel, SidePanelTabProps } from '../../components/SidePanel';
import style from './Studio.module.css';

const sidePanelTabs: SidePanelTabProps[] = [
  {
    title: 'Реестр повесток и вызовов',
    icon: identification,
    onClick: () => {},
  },
  {
    title: 'Создание заключения',
    icon: addDocument,
    onClick: () => {},
  },
  {
    title: 'Журнал заключений',
    icon: menu,
    onClick: () => {},
  },
  {
    title: 'Профиль',
    icon: profile,
    onClick: () => {},
  },
  {
    title: 'Настройки',
    icon: settings,
    onClick: () => {},
  },
  {
    title: 'Помощь',
    icon: question,
    onClick: () => {},
  },
  {
    title: 'Вход',
    icon: signIn,
    onClick: () => {},
  },
];

function Studio() {
  return (
    <div className={style.main}>
      <SidePanel tabs={sidePanelTabs} />
      <CreateConclusion />
    </div>
  );
}

export default Studio;

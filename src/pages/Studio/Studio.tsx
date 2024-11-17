import { useEffect, useState } from 'react';

import addDocument from '../../assets/images/side-panel/add-document.svg';
import identification from '../../assets/images/side-panel/identification.svg';
import menu from '../../assets/images/side-panel/menu.svg';
import profile from '../../assets/images/side-panel/profile.svg';
import question from '../../assets/images/side-panel/question.svg';
import settings from '../../assets/images/side-panel/settings.svg';
import signIn from '../../assets/images/side-panel/sign-in.svg';
import { CreateConclusion } from '../../components/CreateConclusion';
import { Loading } from '../../components/Loading';
import { SidePanel, SidePanelTabProps } from '../../components/SidePanel';
import style from './Studio.module.css';

const EmptyPage = () => {
  return <Loading />;
};

function Studio() {
  const [activeTab, setActiveTab] = useState(-1);
  const [tabContent, setTabContent] = useState(EmptyPage);

  useEffect(() => {
    document.title = 'Автоматизация повесток и вызовов';
  }, []);

  const sidePanelTabs: SidePanelTabProps[] = [
    {
      title: 'Реестр повесток и вызовов',
      icon: identification,
      onClick: () => {
        setActiveTab(0);
        setTabContent(EmptyPage);
      },
    },
    {
      title: 'Создание заключения',
      icon: addDocument,
      onClick: () => {
        setActiveTab(1);
        setTabContent(CreateConclusion());
      },
    },
    {
      title: 'Журнал заключений',
      icon: menu,
      onClick: () => {
        setActiveTab(2);
        setTabContent(EmptyPage);
      },
    },
    {
      title: 'Профиль',
      icon: profile,
      onClick: () => {
        setActiveTab(3);
        setTabContent(EmptyPage);
      },
    },
    {
      title: 'Настройки',
      icon: settings,
      onClick: () => {
        setActiveTab(4);
        setTabContent(EmptyPage);
      },
    },
    {
      title: 'Помощь',
      icon: question,
      onClick: () => {
        setActiveTab(5);
        setTabContent(EmptyPage);
      },
    },
    {
      title: 'Вход',
      icon: signIn,
      onClick: () => {
        setActiveTab(6);
        setTabContent(EmptyPage);
      },
    },
  ];

  return (
    <div className={style.main}>
      <SidePanel tabs={sidePanelTabs} active={activeTab} />
      {tabContent}
    </div>
  );
}

export default Studio;

import { useEffect, useState } from 'react';

import addDocument from '../../assets/images/side-panel/add-document.svg';
import identification from '../../assets/images/side-panel/identification.svg';
import menu from '../../assets/images/side-panel/menu.svg';
import profile from '../../assets/images/side-panel/profile.svg';
import question from '../../assets/images/side-panel/question.svg';
import settings from '../../assets/images/side-panel/settings.svg';
import signIn from '../../assets/images/side-panel/sign-in.svg';
import {
  Dialogue,
  DialogueContentProps,
  Loading,
} from '../../components/shared';
import {
  CreateConclusion,
  Profile,
  SidePanel,
  SidePanelTabProps,
} from '../../components/studio';
import style from './Studio.module.css';

function Studio() {
  const [activeTab, setActiveTab] = useState(-1);
  const [tabContent, setTabContent] = useState(Loading());

  const [dialogueContent, setDialogueContent] = useState(
    {} as DialogueContentProps
  );

  const [isDialogueOpen, setIsDialogueOpen] = useState(false);

  const openDialogue = (content: DialogueContentProps) => {
    setDialogueContent(content);
    setIsDialogueOpen(true);
  };

  const closeDialogue = () => {
    setDialogueContent({} as DialogueContentProps);
    setIsDialogueOpen(false);
  };

  useEffect(() => {
    document.title = 'Автоматизация повесток и вызовов';
  }, []);

  const sidePanelTabs: SidePanelTabProps[] = [
    {
      title: 'Реестр повесток и вызовов',
      icon: identification,
      onClick: () => {
        setActiveTab(0);
        setTabContent(Loading());
      },
    },
    {
      title: 'Создание заключения',
      icon: addDocument,
      onClick: () => {
        setActiveTab(1);
        setTabContent(CreateConclusion({ openDialogue, closeDialogue }));
      },
    },
    {
      title: 'Журнал заключений',
      icon: menu,
      onClick: () => {
        setActiveTab(2);
        setTabContent(Loading());
      },
    },
    {
      title: 'Профиль',
      icon: profile,
      onClick: () => {
        setActiveTab(3);
        setTabContent(Profile({ openDialogue, closeDialogue }));
      },
    },
    {
      title: 'Настройки',
      icon: settings,
      onClick: () => {
        setActiveTab(4);
        setTabContent(Loading());
      },
    },
    {
      title: 'Помощь',
      icon: question,
      onClick: () => {
        setActiveTab(5);
        setTabContent(Loading());
      },
    },
    {
      title: 'Вход',
      icon: signIn,
      onClick: () => {
        setActiveTab(6);
        setTabContent(Loading());
      },
    },
  ];

  return (
    <div className={style.main}>
      <SidePanel tabs={sidePanelTabs} active={activeTab} />
      {tabContent}

      <Dialogue
        content={dialogueContent.content}
        isOpen={isDialogueOpen}
        toClose={closeDialogue}
      >
        {dialogueContent.children}
      </Dialogue>
    </div>
  );
}

export default Studio;

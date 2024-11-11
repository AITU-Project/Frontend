import { useEffect } from 'react';

import style from './Dialogue.module.css';

interface DialogueContent {
  title: string;
  description: string[];
}

interface DialogueProps {
  isOpen: boolean;
  toClose: () => void;
  content: DialogueContent;
  children?: React.ReactNode;
}

export function Dialogue(props: Readonly<DialogueProps>) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        props.toClose();
      }
    };

    if (props.isOpen) {
      window.addEventListener('keydown', handleEsc);
    } else {
      window.removeEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [props.isOpen, props.toClose]);

  if (!props.isOpen) return null;

  return (
    <div className={style.dialogueOverlay}>
      <div className={style.dialogueContent}>
        <div className={style.dialogueText}>
          <h2 className={style.dialogueTitle}>{props.content.title}</h2>
          <div className={style.dialogueDescription}>
            {props.content.description.map((line) => (
              <span className={style.dialogueDescriptionLine} key={line}>
                {line}
              </span>
            ))}
          </div>
        </div>
        <div className={style.dialogueButtonsContainer}>{props.children}</div>
      </div>
    </div>
  );
}

import { useState } from 'react';

import { Button } from '../../components/Button';
import { Dialogue } from '../../components/Dialogue';
import { DialogueButton } from '../../components/DialogueButton';
import styles from './Home.module.css';

function Home() {
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);

  const openDialogue = () => setIsDialogueOpen(true);
  const closeDialogue = () => setIsDialogueOpen(false);

  const accountDeletionHandler = () => {
    closeDialogue();
  };

  const cancelationHandler = () => {
    closeDialogue();
  };

  return (
    <div className={styles.app}>
      <Button
        title="Войти"
        onClick={() => {
          openDialogue();
        }}
      ></Button>

      <Dialogue
        content={{
          title: 'Внимание! Удаление аккаунта',
          description: [
            'Вы уверены, что хотите удалить свой аккаунт?',
            'Это действие необратимо, и все ваши данные будут удалены навсегда. Отменить удаление будет невозможно. Нажмите "Удалить", если вы действительно хотите удалить аккаунт.',
          ],
        }}
        isOpen={isDialogueOpen}
        toClose={closeDialogue}
      >
        <DialogueButton
          title="Отменить"
          onClick={cancelationHandler}
          type={'normal'}
        ></DialogueButton>
        <DialogueButton
          title="Удалить аккаунт"
          type={'red'}
          onClick={accountDeletionHandler}
        ></DialogueButton>
      </Dialogue>
    </div>
  );
}

export default Home;

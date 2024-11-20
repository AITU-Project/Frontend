import { DialogueButton, TextButton } from '../../../buttons';
import { Input } from '../../../inputs';
import { DialogueContentProps } from '../../../shared';
import profilePhoto from '../../assets/images/profile.svg';
import style from './Profile.module.css';

interface ProfileProps {
  openDialogue: (props: DialogueContentProps) => void;
  closeDialogue: CallableFunction;
}

export function Profile(props: Readonly<ProfileProps>) {
  const cancelHandler = () => {
    props.closeDialogue();
  };
  const accountDeletionHandler = () => {
    props.closeDialogue();
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Профиль-страница</h1>
      <div className={style.profile}>
        <div className={style.inputs}>
          <img src={profilePhoto} alt="Фото Профиля" />
          <TextButton title="Изменить Фото" onClick={() => {}} />
        </div>
        <div className={style.inputs}>
          <Input type="text" label="Имя" name="firstname" />
          <Input type="text" label="Фамилия" name="lastname" />
          <Input type="text" label="Email" name="email" />
        </div>
        <div className={style.inputs}>
          <Input type="text" label="Регион" name="region" />
          <Input type="text" label="Роль" name="role" />
        </div>
      </div>
      <div className={style.actions}>
        <DialogueButton
          title="Удалить аккаунт"
          onClick={() => {
            props.openDialogue({
              content: {
                title: 'Внимание! Удаление аккаунта',
                description: [
                  'Вы уверены, что хотите удалить свой аккаунт?',
                  'Это действие необратимо, и все ваши данные будут удалены навсегда. Отменить удаление будет невозможно. Нажмите "Удалить", если вы действительно хотите удалить аккаунт.',
                ],
              },
              children: (
                <>
                  <DialogueButton
                    title="Отменить"
                    onClick={cancelHandler}
                    type={'normal'}
                  ></DialogueButton>
                  <DialogueButton
                    title="Удалить аккаунт"
                    type={'red'}
                    onClick={accountDeletionHandler}
                  ></DialogueButton>
                </>
              ),
            });
          }}
          type="red"
        />
        <DialogueButton title="Сохранить" onClick={() => {}} />
        <DialogueButton title="Сменить Пароль" onClick={() => {}} />
      </div>
    </div>
  );
}

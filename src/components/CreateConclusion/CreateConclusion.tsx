import { Section } from '../Section';
import { SectionButton } from '../SectionButton';
import { SectionInput } from '../SectionInput';
import { SectionSelect } from '../SectionSelect';
import { SectionTextArea } from '../SectionTextArea';
import style from './CreateConclusion.module.css';

export function CreateConclusion() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Создание Заключения</h1>
      <div className={style.sectionsContainer}>
        <Section title="Основная Информация">
          <SectionInput
            label="Регистрационный номер"
            type="text"
            name="registration-id"
          />
          <SectionInput
            label="Дата создания документа"
            type="text"
            name="creation-date"
          />
          <SectionInput
            label="Номер УД (15 Цифр)"
            type="text"
            name="identification-id"
          />
          <SectionInput
            label="Дата регистрации дела"
            type="text"
            name="registration-date"
          />
          <SectionInput label="Статья УК" type="text" name="article" />

          <SectionTextArea label="Решение по делу" name="solution" />
          <SectionTextArea label="Краткая фабула" name="fabula" />
        </Section>
        <Section title="Информация о вызываемом">
          <SectionInput
            label="ИИН вызываемого (12 цифр)"
            type="text"
            name="iin_number"
          />
          <SectionInput
            label="ФИО вызываемого"
            type="text"
            name="called-fullname"
          />
          <SectionInput label="Место работы" type="text" name="working-place" />
          <SectionSelect
            label="Должность вызываемого"
            name="status"
            placeholder="Выберите должность"
            options={['Инспектор', 'Следователь', 'Аналитик']}
          />
          <SectionSelect
            label="Регион"
            name="region"
            placeholder="Выберите регион"
            options={['Астана', 'Алматы', 'Шымкент']}
          />
          <SectionTextArea
            label="Планируемые следственные действия"
            name="plans"
          />
        </Section>
        <Section title="Информация о следственном действии">
          <SectionInput
            label="Дата и время проведения"
            name="date-and-time"
            type="text"
          />
          <SectionSelect
            label="Место проведения"
            placeholder="Место проведения"
            options={[]}
            name="location"
          />
          <SectionInput label="Следователь" type="text" name="spy" />
          <SectionSelect
            label="Статус по делу вызываемого"
            placeholder="Статус по делу вызываемого"
            options={[]}
            name="status"
          />
          <SectionInput
            label="Отношение вызывающего к событию и субъекту"
            type="text"
            name="spy"
          />
          <SectionSelect
            label="Виды планируемого действия"
            placeholder="Виды планируемого действия"
            options={[]}
            name="types"
          />
          <SectionSelect
            label="Относится ли к бизнесу"
            placeholder="Относится ли к бизнесу"
            options={['Да', 'Нет']}
            name="business?"
          />
          <SectionInput
            label="Обоснование и необходимость участия предпринимателя"
            type="text"
            name="enterpreneur"
          />
          <SectionInput
            label="Результат от планируемого следственного действия"
            type="text"
            name="result"
          />
        </Section>
        <Section title="История вызовов">
          <SectionInput
            label="Предыдущий вызов по УД"
            type="text"
            name="previous-call"
          />
          <SectionInput
            label="Кто вызывал"
            type="text"
            name="previous-call-person"
          />
          <SectionInput
            label="Статус предудыщего вызыва"
            type="text"
            name="previous-call-status"
          />
          <SectionInput
            label="Время прихода"
            type="text"
            name="previous-call-arrival"
          />
          <SectionInput
            label="Время ухода"
            type="text"
            name="previous-call-leave"
          />
          <SectionInput
            label="Причины и цели повторного вызова"
            type="text"
            name="previous-call-reasons"
          />
        </Section>
        <Section title="Путь согласования заключения">
          <SectionInput label="Должность" type="text" name="status" />
          <SectionInput label="ФИО" type="text" name="fullname" />
          <SectionSelect
            label="Статус согласования"
            name="status-of"
            placeholder="На доработку"
            options={['На доработку', 'Утверждено', 'Отказ']}
          />
          <SectionInput
            label="Дата и время согласования"
            type="text"
            name="datetime-of"
          />
          <SectionInput
            label="Причина отправки на доработку/отказ/без рассмотрения"
            type="text"
            name="reason-for"
          />
        </Section>
      </div>
      <div className={style.buttonsContainer}>
        <SectionButton title="Сохранить" type="green" onClick={() => {}} />
        <SectionButton
          title="На согласование"
          type="yellow"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

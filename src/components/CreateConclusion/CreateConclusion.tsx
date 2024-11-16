import { Section } from '../Section';
import { SectionInput } from '../SectionInput';
import style from './CreateConclusion.module.css';

export function CreateConclusion() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Создание Заключения</h1>
      <div className={style.sectionsContainer}>
        <Section title="Основная Информация">
          <SectionInput label="Регистрационный номер" type={'text'} />
        </Section>
      </div>
    </div>
  );
}

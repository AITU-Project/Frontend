import { ReactNode } from 'react';

import style from './Section.module.css';

interface SectionProps {
  title: string;
  children?: ReactNode;
}

export function Section(props: Readonly<SectionProps>) {
  return (
    <div className={style.container}>
      <span className={style.header}>{props.title}</span>
      <div className={style.childrenContainer}>{props.children}</div>
    </div>
  );
}

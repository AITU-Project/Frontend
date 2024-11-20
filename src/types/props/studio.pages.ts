import { DialogueContentProps } from '../../components/shared';

export interface StudioPageProps {
  openDialogue: (content: DialogueContentProps) => void;
  closeDialogue: () => void;
}

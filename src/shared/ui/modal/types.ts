export interface BaseModalProps {
  title: string;
  onExecute: () => void;
  onExecuteMsg: string;
  onExecuteisActive: boolean;
  onClose: () => void;
  onCloseMsg: string;
}

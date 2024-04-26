export interface BaseModalProps {
  title: string;
  onExecute: () => void;
  onExecuteMsg: string;
  onExecuteIsDisabled: boolean;
  onClose: () => void;
  onCloseMsg: string;
}

export interface BaseButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export interface ActiveButtonProps extends BaseButtonProps {
  isActive: boolean;
}

import { createPortal } from 'react-dom';

import { Backdrop } from '../backdrop';
import './ModalOverlay.scss';

const portalElement: HTMLElement = document.getElementById(
  'overlays',
) as HTMLElement;

type ModalOverlayClass = 'bottom-sheet' | 'modal';

interface ModalOverlayProps {
  styleClass: ModalOverlayClass;
  children: JSX.Element;
  onClose: () => void;
}

export const ModalOverlay = ({
  styleClass,
  children,
  onClose,
}: ModalOverlayProps) => {
  return (
    <>
      {createPortal(<Backdrop onClick={onClose} />, portalElement)}
      {createPortal(
        <section className={styleClass}>{children}</section>,
        portalElement,
      )}
    </>
  );
};

import './Backdrop.scss';

interface BackdropProps {
  onClick: () => void;
}

export const Backdrop = ({ onClick }: BackdropProps) => {
  return <div className='backdrop' onClick={onClick} />;
};

import './Backdrop.scss';

interface BackdropProps {
  onClick: () => void;
}

export default function Backdrop({ onClick }: BackdropProps) {
  return <div className='backdrop' onClick={onClick} />;
}

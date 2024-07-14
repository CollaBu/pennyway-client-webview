import './ProfileCount.scss';

interface ProfileCountProps {
  number: string;
  text: string;
}

export const ProfileCount = ({ number, text }: ProfileCountProps) => {
  return (
    <div className='profile-count'>
      <h4 className='count-number h3semi'>{number}</h4>
      <p className='count-text b2md'>{text}</p>
    </div>
  );
};

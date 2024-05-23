import './ProfileHeader.scss';

interface ProfileHeaderProps {
  name: string;
}

export const ProfileHeader = ({ name }: ProfileHeaderProps) => {
  return (
    <header className='profile-header'>
      <p className='name h4md'>{name}</p>
    </header>
  );
};

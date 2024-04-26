import './Profile.scss';

interface ProfileProps {
  profileImage: string;
  name: string;
  content: string;
}

export default function Profile({ profileImage, name, content }: ProfileProps) {
  return (
    <div className='profile'>
      <img src={profileImage} className='profile-image' />
      <div className='name-section'>
        <h5 className='name b1semi'>{name}</h5>
        <p className='content b3md'>{content}</p>
      </div>
    </div>
  );
}

import './Profile.scss';

interface ProfileProps {
  profileImage: string;
  name: string;
  content: string;
}

export default function Profile({ profileImage, name, content }: ProfileProps) {
  return (
    <div className='profile'>
      <img src={profileImage} className='profileImage' />
      <div className='nameSection'>
        <h5 className='userName b1semi'>{name}</h5>
        <p className='description b3md'>{content}</p>
      </div>
    </div>
  );
}

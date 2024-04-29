import './Profile.scss';

interface ProfileProps {
  profileImage: string;
  name: string;
  content: string;
}

export const Profile = ({ profileImage, name, content }: ProfileProps) => {
  const profileImg = profileImage === '' ? 'defalut-img' : profileImage;

  return (
    <div className='profile'>
      <img src={profileImg} className='profile-image' />
      <div className='name-section'>
        <h5 className='name b1semi'>{name}</h5>
        <p className='content b3md'>{content}</p>
      </div>
    </div>
  );
};

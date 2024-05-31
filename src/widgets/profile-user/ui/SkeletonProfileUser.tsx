import './SkeletonProfileUser.scss';

export const SkeletonProfileUser = () => {
  return (
    <section className='skeleton-profile-user-wrapper'>
      <section className='skeleton-profile-top-container'>
        <div className='skeleton-proile' />
        <div className='skeleton-user-name' />
        <div className='skeleton-profile-btn'></div>
      </section>
      <section className='skeleton-profile-count-container'>
        <div className='skeleton-profile-count'>
          <div className='skeleton-count-number' />
          <div className='skeleton-count-text' />
        </div>
        <div className='count-divider' />
        <div className='skeleton-profile-count'>
          <div className='skeleton-count-number' />
          <div className='skeleton-count-text' />
        </div>
        <div className='count-divider' />
        <div className='skeleton-profile-count'>
          <div className='skeleton-count-number' />
          <div className='skeleton-count-text' />
        </div>
      </section>
    </section>
  );
};

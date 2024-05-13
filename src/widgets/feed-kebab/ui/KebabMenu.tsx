import './KebabMenu.scss';

export const KebabMenu = () => {
  return (
    <ul className='kebab-menu-list'>
      <li className='kebab-menu-item'>
        <button className='item-btn b2md'>게시물 숨기기</button>
      </li>
      <li className='kebab-menu-item'>
        <button className='item-btn b2md'>신고하기</button>
      </li>
    </ul>
  );
};

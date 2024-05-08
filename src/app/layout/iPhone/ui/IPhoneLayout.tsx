/**
 * 해당 레이아웃은 DEV 모드에서만 활성화되는 레이아웃입니다.
 * 이 레이아웃은 아이폰 레이아웃을 구현하며, 아이폰 레이아웃은 1440px 이상의 환경에서만 확인하실 수 있습니다.
 */

import { Outlet } from 'react-router-dom';

import iPhoneStatus from '/assets/image/iPhone_status.png';
import './IPhoneLayout.scss';

export const IPhoneLayout = () => {
  return (
    <div className='root-layout'>
      <div className='iPhone-layout'>
        <div className='client-area'>
          <img className='iPhone-status' src={iPhoneStatus} />
          <Outlet />
        </div>

        <div className='iPhone-utility-container'>
          <button className='size-down-btn'>-</button>
          <button className='retry-btn' onClick={() => location.reload()} />
          <button className='size-up-btn'>+</button>
        </div>
      </div>
    </div>
  );
};

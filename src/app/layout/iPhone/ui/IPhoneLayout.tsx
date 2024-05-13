/**
 * 해당 레이아웃은 DEV 모드에서만 활성화되는 레이아웃입니다.
 * 이 레이아웃은 아이폰 레이아웃을 구현하며, 아이폰 레이아웃은 1440px 이상의 환경에서만 확인하실 수 있습니다.
 */

import { Outlet } from 'react-router-dom';

import { useUtilityIPhone } from '../hooks/useUtilityIPhone';

import iPhoneStatus from '/assets/image/iPhone_status.png';
import './IPhoneLayout.scss';

export const IPhoneLayout = () => {
  const { iPhoneLayoutRef, handleSizeDown, handleRotate, handleSizeUp } =
    useUtilityIPhone();

  return (
    <div className='root-layout'>
      <div ref={iPhoneLayoutRef} className='iPhone-layout'>
        <div className='client-area'>
          <img className='iPhone-status' src={iPhoneStatus} />
          <Outlet />
        </div>

        <div className='iPhone-utility-container'>
          <button className='size-down-btn' onClick={handleSizeDown}>
            -
          </button>
          <button className='rotation-btn' onClick={handleRotate} />
          <button className='size-up-btn' onClick={handleSizeUp}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

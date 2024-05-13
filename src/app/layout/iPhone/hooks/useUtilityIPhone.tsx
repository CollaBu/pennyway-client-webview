import { useEffect, useRef } from 'react';

const IPHONE_MIN_SIZE = 60;
const IPHONE_INIT_SIZE = 80;
const IPHONE_MAX_SIZE = 100;

const IPHONE_PROTRAIT_MODE = 0; // 세로 모드
const IPHONE_LANDSCAPE_MODE = -90; // 가로 모드

/**
 * iPhone 레이아웃의 크기를 동적으로 변경하는 훅입니다.
 * @returns iPhone 레이아웃의 참조와 사이즈 변경 핸들러
 */
export const useUtilityIPhone = () => {
  const iPhoneSizeRef = useRef<number>(IPHONE_INIT_SIZE);
  const iPhoneModeRef = useRef<number>(IPHONE_PROTRAIT_MODE);
  const iPhoneLayoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--iphone-size',
      `${IPHONE_INIT_SIZE}%`,
    );

    document.documentElement.style.setProperty(
      '--iphone-mode',
      `${IPHONE_PROTRAIT_MODE}deg`,
    );
  }, []);

  const changeStyle = () => {
    if (iPhoneLayoutRef.current) {
      iPhoneLayoutRef.current.style.height = `${iPhoneSizeRef.current}%`;
      document.documentElement.style.setProperty(
        '--iphone-size',
        `${iPhoneSizeRef.current}%`,
      );
    }
  };

  const handleSizeUp = () => {
    if (iPhoneSizeRef.current >= IPHONE_MAX_SIZE) return;

    iPhoneSizeRef.current += 1;
    changeStyle();
  };

  const handleSizeDown = () => {
    if (iPhoneSizeRef.current <= IPHONE_MIN_SIZE) return;

    iPhoneSizeRef.current -= 1;
    changeStyle();
  };

  const handleRotate = () => {
    if (iPhoneModeRef.current === IPHONE_PROTRAIT_MODE) {
      // 가로 모드로 변경
      iPhoneModeRef.current = IPHONE_LANDSCAPE_MODE;
      document.documentElement.style.setProperty(
        '--iphone-mode',
        `${IPHONE_LANDSCAPE_MODE}deg`,
      );
    } else {
      // 세로 모드로 변경
      iPhoneModeRef.current = IPHONE_PROTRAIT_MODE;
      document.documentElement.style.setProperty(
        '--iphone-mode',
        `${IPHONE_PROTRAIT_MODE}deg`,
      );
    }
  };

  return { iPhoneLayoutRef, handleRotate, handleSizeUp, handleSizeDown };
};

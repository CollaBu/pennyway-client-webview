import { useEffect, useRef } from 'react';

const IPHONE_MIN_SIZE = 60;
const IPHONE_MAX_SIZE = 100;

/**
 * iPhone 레이아웃의 크기를 동적으로 변경하는 훅입니다.
 * @param initialSize 초기 사이즈
 * @returns iPhone 레이아웃의 참조와 사이즈 변경 핸들러
 */
export const useDynamicSize = (initialSize: number = 80) => {
  const iPhoneSizeRef = useRef<number>(initialSize);
  const iPhoneLayoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--iphone-size',
      `${initialSize}%`,
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

  return { iPhoneLayoutRef, handleSizeUp, handleSizeDown };
};

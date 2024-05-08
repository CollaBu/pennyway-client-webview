import { useRef } from 'react';

/**
 * iPhone 레이아웃의 크기를 동적으로 변경하는 훅입니다.
 * @param initialSize 초기 사이즈
 * @returns iPhone 레이아웃의 참조와 사이즈 변경 핸들러
 */
export const useDynamicSize = (initialSize: number) => {
  const iPhoneSizeRef = useRef<number>(initialSize);
  const iPhoneLayoutRef = useRef<HTMLDivElement>(null);

  const handleSizeUp = () => {
    if (iPhoneSizeRef.current >= 100) return;

    iPhoneSizeRef.current += 1;
    if (iPhoneLayoutRef.current) {
      iPhoneLayoutRef.current.style.height = `${iPhoneSizeRef.current}%`;
    }
  };

  const handleSizeDown = () => {
    if (iPhoneSizeRef.current <= initialSize) return;

    iPhoneSizeRef.current -= 1;
    if (iPhoneLayoutRef.current) {
      iPhoneLayoutRef.current.style.height = `${iPhoneSizeRef.current}%`;
    }
  };

  return { iPhoneLayoutRef, handleSizeUp, handleSizeDown };
};

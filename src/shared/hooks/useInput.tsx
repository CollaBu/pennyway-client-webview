import { useCallback, useState } from 'react';

/**
 * useInput 훅은 input 태그의 value와 onChange 이벤트를 처리하는 함수를 반환하는 커스텀 훅입니다.
 * @param defaultValue 초기값
 * @returns [상태값, 이벤트 핸들러, 상태 설정 함수]
 */
export const useInput = (defaultValue: string = '') => {
  const [value, setValue] = useState(defaultValue);

  const handleInputContent = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [],
  );

  return [value, handleInputContent, setValue] as const; // 자리 고정
};

import { useCallback, useState } from 'react';

/**
 * reference: https://usehooks-ts.com/react-hook/use-toggle
 * useToggle 훅은 boolean 값과 값을 토글할 수 있는 함수를 반환하는 커스텀 훅입니다.
 * @param defaultValue 초기값
 * @returns [상태값, 토글 함수, 상태 설정 함수]
 */
export function useToggle(defaultValue?: boolean) {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => {
    setValue((x) => !x);
  }, []);

  return [value, toggle, setValue] as const;
}

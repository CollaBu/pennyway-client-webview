import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface ObserverProps {
  isReadyForNextPage: boolean; // 다음 페이지를 가져올 준비가 되었는지 여부
  fetch: () => void; // 데이터를 가져오는 함수
}

/**
 * 무한 스크롤링을 위한 옵저버 컴포넌트입니다.
 * @returns isFetching이 false이고, 옵저버가 화면에 보일 때 fetch 함수를 호출합니다.
 */
export const Observer: React.FC<ObserverProps> = ({
  isReadyForNextPage,
  fetch,
}) => {
  const { ref: observerRef, inView } = useInView();

  useEffect(() => {
    if (inView && isReadyForNextPage) {
      fetch();
    }
  }, [inView, isReadyForNextPage, fetch]);

  return <div ref={observerRef} />;
};

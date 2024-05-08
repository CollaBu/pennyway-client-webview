const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;

/**
 * 대한민국을 기준으로 현재 시간 반환
 * ex) 2024-04-30 01:32:00
 * @returns 현재 시간
 */
export function getCurrentDate() {
  const today = new Date();

  const offset = 9; // 대한민국 시간 = UTC + 09:00
  today.setHours(today.getHours() + offset);

  const date = today.toISOString().split('T')[0];
  const time = today.toISOString().split('T')[1].substring(0, 8);

  return `${date} ${time}`;
}

/**
 * 경과 시간 계산 함수
 * @param feedUploadedAt 피드의 최종 수정 시간
 * @returns 경과 시간 ex) 1일 전
 */
export function calculateElapsedTime(feedUploadedAt: string) {
  const feedUploadedDate = new Date(feedUploadedAt);
  const today = new Date();

  const elapsedTime = today.getTime() - feedUploadedDate.getTime();

  return formatElapsedTime(elapsedTime);
}

/**
 * 경과 시간 포맷팅 함수
 * @param elapsedTime 경과 시간
 * @returns 경과 시간 포맷팅 결과 ex) 1일 전
 */
function formatElapsedTime(elapsedTime: number) {
  if (elapsedTime < HOUR) return `${Math.floor(elapsedTime / MINUTE)}분 전`;
  if (elapsedTime < DAY) return `${Math.floor(elapsedTime / HOUR)}시간 전`;
  if (elapsedTime < WEEK) return `${Math.floor(elapsedTime / DAY)}일 전`;

  return new Date(elapsedTime).toLocaleDateString();
}

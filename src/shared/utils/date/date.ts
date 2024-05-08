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

  // 대한민국 시간 = UTC + 09:00
  today.setHours(today.getHours() + 9);

  return today.toISOString().replace('T', ' ').substring(0, 19);
}

/**
 * 경과 시간 계산 함수
 * @param feedUploadedAt 피드의 최종 수정 시간
 * @returns 현재 시간 기준 경과 시간
 */
export function calculateElapsedTime(feedUploadedAt: string) {
  const feedUploadedDate = new Date(feedUploadedAt);
  const today = new Date();

  const elapsedTime = today.getTime() - feedUploadedDate.getTime();

  if (elapsedTime < HOUR) return formatElapsedTime(elapsedTime / MINUTE, '분');
  if (elapsedTime < DAY) return formatElapsedTime(elapsedTime / HOUR, '시간');
  if (elapsedTime < WEEK) return formatElapsedTime(elapsedTime / DAY, '일');

  return `${feedUploadedDate.toLocaleDateString()}`;
}

/**
 * 경과 시간 포맷팅 함수
 * @param elapsedTime 경과 시간
 * @param unit 단위
 * @returns 경과 시간 포맷팅 결과 ex) 1일 전
 */
function formatElapsedTime(elapsedTime: number, unit: string) {
  return `${Math.floor(elapsedTime)}${unit} 전`;
}

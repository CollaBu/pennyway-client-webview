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

  const seconds = Math.floor(
    (today.getTime() - feedUploadedDate.getTime()) / 1000,
  );
  const minutes = seconds / 60;

  if (minutes < 60) return `${Math.floor(minutes)}분 전`;

  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;

  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;

  return `${feedUploadedDate.toLocaleDateString()}`;
}

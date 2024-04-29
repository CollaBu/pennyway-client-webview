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

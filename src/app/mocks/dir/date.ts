export function getCurrentDate() {
  const today = new Date();

  // 대한민국 시간 = UTC + 09:00
  today.setHours(today.getHours() + 9);

  return today.toISOString().replace('T', ' ').substring(0, 19);
}

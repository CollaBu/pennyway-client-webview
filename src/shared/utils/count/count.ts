/**
 * count가 일정 수 이상으로 커질 시, 글자로 변환하는 함수
 * @param {number} count
 * @returns {string} 변환된 숫자
 */
export function formatCount(count: number) {
  if (count < 1000) {
    return String(count);
  } else if (100000000 <= count) {
    return `${Math.floor(count / 100000000)}억`;
  } else if (10000000 <= count) {
    return `${Math.floor(count / 10000000)}천만`;
  } else if (1000000 <= count) {
    return `${Math.floor(count / 1000000)}백만`;
  } else if (10000 <= count) {
    return `${Math.floor(count / 10000)}만`;
  } else {
    return `${Math.floor(count / 1000)}천`;
  }
}

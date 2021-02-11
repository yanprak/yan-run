export function formatDate(date: Date): string {
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  return [date.getFullYear(), `${(mm > 9 ? '' : '0')}mm`, `${(dd > 9 ? '' : '0')}dd`].join('-');
}

export function getTime(date: Date): string {
  const hours = date.getHours();
  const hh = hours < 10 ? `0${hours}` : `${hours}`;
  const minutes = date.getMinutes();
  const mm = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${hh}:${mm}`;
}

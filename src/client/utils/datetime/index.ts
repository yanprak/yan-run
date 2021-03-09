export function formatDate(date: Date): string {
  const mm = `${date.getMonth() + 1}`;
  const dd = `${date.getDate()}`;
  return [date.getFullYear(), `${mm.padStart(2, '0')}`, `${dd.padStart(2, '0')}`].join('-');
}

export function getTime(date: Date): string {
  const hours = date.getHours();
  const hh = `${hours}`.padStart(2, '0');
  const minutes = date.getMinutes();
  const mm = `${minutes}`.padStart(2, '0');
  return `${hh}:${mm}`;
}

export function isDateValid(d: Date): boolean {
  return d instanceof Date && !Number.isNaN(d.getTime());
}

export function createShortDate(date: Date): string {
  return date.toLocaleString('ru', {
    month: 'long',
    day: 'numeric',
  });
}

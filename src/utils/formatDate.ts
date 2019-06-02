import { padNumberByZero } from './padNumberByZero';

export const formatDate = (millisecond: number): string => {
  const dateObject = new Date(millisecond);
  const year = padNumberByZero(dateObject.getFullYear(), 2);
  const month = padNumberByZero(dateObject.getMonth() + 1, 2);
  const date = padNumberByZero(dateObject.getDate(), 2);
  const hours = padNumberByZero(dateObject.getHours(), 2);
  const minutes = padNumberByZero(dateObject.getMinutes(), 2);
  return `${year}-${month}-${date} ${hours}:${minutes}`;
};

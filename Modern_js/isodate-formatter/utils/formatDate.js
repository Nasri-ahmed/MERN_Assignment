import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import localizedFormat from 'dayjs/plugin/localizedFormat.js';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';

dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(advancedFormat);

export function readableFormat(isoDate) {
  return dayjs(isoDate).utc().format('MMMM D, YYYY, hh:mm:ss A [UTC]');
}

export function relativeFormat(isoDate) {
  return dayjs(isoDate).fromNow();
}

export function longFormat(isoDate) {
  return dayjs(isoDate).format('dddd, MMMM D, YYYY');
}

export function shortFormat(isoDate) {
  return dayjs(isoDate).format('MM/DD/YYYY');
}

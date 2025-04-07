// formatToEST.js
import { formatInTimeZone } from 'date-fns-tz';

const formatToEST = (isoString) => {
  const trimmed = isoString.split('.')[0] + 'Z';
  return formatInTimeZone(trimmed, 'America/New_York', 'MMM d, HH:mm');
};

export default formatToEST;

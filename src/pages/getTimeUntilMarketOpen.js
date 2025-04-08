// getTimeUntilMarketOpen.js
const getTimeUntilMarketOpen = () => {
    const now = new Date();
  
    const utcDay = now.getUTCDay();
    const utcHour = now.getUTCHours();
    const utcMinute = now.getUTCMinutes();
  
    const nowMinutes = utcHour * 60 + utcMinute;
    let nextOpen = new Date(now);
  
    // If today is weekday and before 9:30am ET
    if (utcDay >= 1 && utcDay <= 5 && nowMinutes < 13 * 60 + 30) {
      nextOpen.setUTCHours(13, 30, 0, 0);
    } else {
      // Otherwise go to next weekday
      do {
        nextOpen.setUTCDate(nextOpen.getUTCDate() + 1);
      } while (nextOpen.getUTCDay() === 0 || nextOpen.getUTCDay() === 6);
  
      nextOpen.setUTCHours(13, 30, 0, 0);
    }
  
    const diffMs = nextOpen - now;
    const diffMinutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;
  
    return `${hours}h ${minutes}m`;
  };
  
  export default getTimeUntilMarketOpen;
  
const isMarketOpen = () => {
    const now = new Date();
  
    // Convert to ET
    const utcHour = now.getUTCHours();
    const utcMinute = now.getUTCMinutes();
    const day = now.getUTCDay();
  
    // Market open: 9:30 AM to 4:00 PM ET 
    const currentMinutes = utcHour * 60 + utcMinute;
    const openMinutes = 13 * 60 + 30;
    const closeMinutes = 20 * 60;
  
    const isWeekday = day >= 1 && day <= 5;
  
    return isWeekday && currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
  };
  
  export default isMarketOpen;  
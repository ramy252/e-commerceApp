export function calcTimeLeft(targetDate) {
    if (!targetDate) {
        targetDate = new Date().setHours(24, 59, 59,999);
    }
    
    const ONE_HOUR_MS = 1000 * 60 * 60;
    const ONE_MINUTE_MS = 1000 * 60;
    const ONE_SECOND_MS = 1000;
    const difference = targetDate - Date.now();
    if(difference>0){

        const hours = Math.trunc(difference / ONE_HOUR_MS);
        const minutes = Math.trunc((difference % ONE_HOUR_MS) / ONE_MINUTE_MS);
        const seconds = Math.trunc((difference % ONE_MINUTE_MS) / ONE_SECOND_MS);
        return { hours, minutes, seconds };
    } else {
        
        
        return { hours:0, minutes:0, seconds:0 };
    }
    
}
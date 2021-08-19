const plural = (gap: number) =>{
    return gap>1? "s" : ""
}

const getTimeUploaded = (uploadedTimeStamp: string | undefined): string =>{
   if(uploadedTimeStamp){
    const currTimeStamp = new Date();
    const currYear = currTimeStamp.getFullYear()
    const currMonth = currTimeStamp.getMonth() + 1
    const currDate = currTimeStamp.getDate()
    const currHours = currTimeStamp.getHours()
    // console.log(currYear, currMonth, currDate, currHours, uploadedTimeStamp.slice(0,4), currTimeStamp);
    // 2021-07-17T16:53:49-04:00
    const uploadedYear = Number(uploadedTimeStamp.slice(0,4))
    
    if(uploadedYear!==currYear) {
        let gap = (currYear - uploadedYear);
        return gap + " year"+ plural(gap) + " ago"
    }
    const uploadedMonth = Number(uploadedTimeStamp.slice(6,7))
    // console.log(uploadedMonth);
    if(uploadedMonth!==currMonth){
        let gap = (currMonth - uploadedMonth);
        return gap + " year"+ plural(gap) + " ago"
    }
    const uploadedDate = Number(uploadedTimeStamp.slice(9,10))
    if(uploadedDate!==currDate){
        let gap = (currDate - uploadedDate)
        return gap > 7 ? Math.floor(gap/7) + " week"+ plural(Math.floor(gap/7)) + " ago" : (currDate - uploadedDate) + " day"+ plural(gap) +" ago"
    }
    const uploadedTime = Number(uploadedTimeStamp.slice(12,13))
    if(uploadedTime!==currHours){
        let gap = (currHours - uploadedTime)
        return gap + " hour"+ plural(gap) + " ago"
    }
    return "now";
   }
   return ""
}

export default getTimeUploaded
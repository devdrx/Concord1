export default function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if(hours < 10) hours = "0" + hours;

    if(minutes < 10) minutes = "0" + minutes;

    return [hours, minutes].join(":");
    
  }

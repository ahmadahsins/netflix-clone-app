const starsReview = (item) => {
    if(item.vote_average >= 8) {
        return "⭐⭐⭐⭐⭐"
    } else if(item.vote_average >= 6) {
        return "⭐⭐⭐⭐"
    } else if(item.vote_average >= 4) {
        return "⭐⭐⭐"
    } else if(item.vote_average >= 2) {
        return "⭐⭐"
    } else {
        return "⭐"
    }
}

const timeConvert = (time) => {
    const num = time;
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return rhours + " hours " + rminutes + " minutes";
}
    
export { starsReview, timeConvert };
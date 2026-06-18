/**
 * PROMISES are another way to use callback functions.Rather than integrating the method call (as a parameter), we use it as a parameter of the new then(callback) method.This simplifies the reading of Javascript code in case it uses callback functions.
 */

function time(){
    // return time as HH:MM:SS
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    
    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;
    return "" + hour + ":"+ min + ":" + sec+ " ";
}




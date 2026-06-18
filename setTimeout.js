// setTimeout() function 
/**
 * This is to position a processing function (the callback function) that will be executed when the time period expressed by timeeout(in milliseconds) has elapsed.
 */

// console.log('Before setTimeout()');
// setTimeout(function (){
//     console.log('In the callback function')
// }, 5000) ; // 5000 milliseconds or 5 seconds
// console.log('After setTimeout()')

console.log(time(), "Before setTimeout()");
setTimeout(function(){
    console.log(time(), "In the Callback function");
}, 5000); //5000 = 5 seconds

console.log(time(), "After setTimeout()");

function time(){
    //return time as HH:MM:SS

    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if(hour < 10) hour ="0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    return "" + hour + ":" + min + ":" + sec + "";
}

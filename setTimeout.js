// setTimeout() function 
/**
 * This is to position a processing function (the callback function) that will be executed when the time period expressed by timeeout(in milliseconds) has elapsed.
 */

console.log('Before setTimeout()');
setTimeout(function (){
    console.log('In the callback function')
}, 5000) ; // 5000 milliseconds or 5 seconds
console.log('After setTimeout()')
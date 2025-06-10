
window.onload= function(){digitalclock()};
function digitalclock(){
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = (hour >= 12)? " PM ":" AM ";
    hour = (hour >= 12)? hour - 12: hour
    if (hour===0 && prepand===' PM ') 

    {
    if (minute===0 && second===0)
    {
    hour=12;
    prepand=' Noon';
    }
    else
    {
    hour=12;
    prepand=' PM';
    }
    }
    if (hour===0 && prepand===' AM ') 
    {
    if (minute===0 && second===0)
    {
    hour=12;
    prepand=' Midnight';
    }
    else
    {
    hour=12;
    prepand=' AM';
    }
    }
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    document.getElementById('text11').innerHTML = hour + " : " + minute + " : " + second + prepand;
    setTimeout(digitalclock,1000);
    
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
function clock() {
    var time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  ""+h + ":" + m + ":" + s;
    setTimeout(clock, 1000);
}
function onMouseOn() {
    document.getElementById("change").innerHTML = "You can create!";
}
function onMouseOut() {
    document.getElementById("change").innerHTML = "All you can think,";
}
clock();
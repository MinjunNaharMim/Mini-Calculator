var plusbtn = document.getElementById('plus');
var minusbtn = document.getElementById('minus');
var mulbtn = document.getElementById('mul');
var divbtn = document.getElementById('div');
plusbtn.onclick = function(){

    var firstnumber = Number (document.getElementById('fn').value);
    var secondnumber =Number (document.getElementById('sn').value);
    var result = firstnumber + secondnumber;


    document.getElementById('res').value = result;
}

minusbtn.onclick = function(){

    var firstnumber = Number (document.getElementById('fn').value);
    var secondnumber =Number (document.getElementById('sn').value);
    var result = firstnumber - secondnumber;

    document.getElementById('res').value = result;
}

mulbtn.onclick = function(){

    var firstnumber = Number (document.getElementById('fn').value);
    var secondnumber =Number (document.getElementById('sn').value);
    var result = firstnumber * secondnumber;

    document.getElementById('res').value = result;
}
divbtn.onclick = function(){

    var firstnumber = Number (document.getElementById('fn').value);
    var secondnumber =Number (document.getElementById('sn').value);
    var result = firstnumber / secondnumber;

    document.getElementById('res').value = result;
}

function demo() {

var dt = document.getElementById('time');

var dateTime = new Date();
var hours = dateTime.getHours();
var minutes = dateTime.getMinutes();
var seconds = dateTime.getSeconds();

var watch = hours+ ':' + minutes + ':' +seconds;
dt.innerHTML = watch;

}

setInterval(demo, 1000);
var countDownDate= new Date("Jan, 1, 2021 00:00:00").getTime();

var countDownfunction = setInterval(function() {

    var now = new Date().getTime();
    var time = countDownDate - now;

    var days = Math.floor(time / (1000 * 60 * 60 * 24));
    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML= days + "d  " + hours + "h  " + minutes + "m  " + seconds + "s  ";

    if(time < 0) {
        clearInterval(countDownfunction);
        document.getElementById("time").innerHTML = "Happy New Year";
    }
},1000);
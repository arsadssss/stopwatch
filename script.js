let [hours, minutes, seconds] = [0, 0, 0];
let target = document.querySelector("#displayTime");
let timer = null;
let ul = document.querySelector("#add");


function stopWatchFunction(){
    seconds ++;
    if(seconds == 60){
        minutes++;
        seconds = 0;
        if(minutes == 60){
            hours++;
            minutes = 0;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    target.innerHTML = h + ":" + m + ":" + s;
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatchFunction, 1000);
}
function watchStop(){
    clearInterval(timer);
    ul.innerHTML += "<li>" + target.innerHTML + "</li>";

}
function watchReset(){
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    target.innerHTML = "00:00:00";
    ul.innerHTML = "";
}
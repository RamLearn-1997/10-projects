const timerEl = document.getElementById('timer');
const startButtonEl = document.getElementById('start');
const stopButtonEl = document.getElementById('stop');
const resetButtonEl = document.getElementById('reset');

let startTime = 0;
let elapseTime = 0;
let timerInterval;

function startTimer(){
  startTime = Date.now() - elapseTime;

  timerInterval = setInterval(()=> {
    elapseTime = Date.now() - startTime
    timerEl.textContent = formatTime(elapseTime);
  },10);

  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
}

function formatTime(elapseTime){
   const miliseconds = Math.floor((elapseTime % 1000)/10);
   const seconds = Math.floor((elapseTime % (1000 * 60)) / 1000);
   const minutes = Math.floor((elapseTime % (1000 * 60 * 60)) / (1000 * 60));
   const hours = Math.floor(elapseTime / (1000 * 60 * 60));
   
   return ((hours ? (hours > 9 ? hours : "0" + hours) : "00")+":"+(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") 
    + ":" + 
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +"."+ (miliseconds > 9 ? miliseconds : "0" + miliseconds));

}

function stopTimer(){
  clearInterval(timerInterval);
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}

function resetTimer(){
    clearInterval(timerInterval);

    elapseTime = 0;

    timerEl.textContent = "00:00:00";
    
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}

startButtonEl.addEventListener('click', startTimer);
stopButtonEl.addEventListener('click', stopTimer);
resetButtonEl.addEventListener('click', resetTimer);
 let [seconds, minutes, hours] = [0,0,0];
 let displayTime = document.getElementById("displayTime");
 let timer = null;
 function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
    
    if(minutes == 60){
        minutes=0;
        hours++;
    } 
   }
   let h = hours<10? "0" +hours:hours;
   let m = hours<10? "0" +hours:hours;
   let s = hours<10? "0" +hours:hours;
      displayTime.innerHTML = hours + ":" +minutes + ":" +seconds;
 }
 function watchStart(){
    let timer;
    if(timer! == null){
    
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);

 }
 function watchStop(){
    clearInterval(timer);
 }
 function watchReset(){
    clearInterval(timer);
 }
 function watchStart(){
    if(timer!=null){
        clearInterval(timer);
        [seconds, minutes, hours];

    }

    timer = setInterval(stopWatch,1000)
 }
 function watchReset (){
 clearInterval = (timer1);
 [seconds ,minutes,hours] =[0,0,0];
 displayTime.innerHTML = "00:00:00";
 }

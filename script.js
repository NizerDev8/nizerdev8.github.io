var time;
var subject;
var x = 0;
var y = 0;
var activityList = [,];
var timeList = [,];



function Subject(){

  subject = window.prompt("What activity you like add to the list do?")
  time = Number(window.prompt("How many minutes would you like to do this?"))
  
 
 timeList[x] = time
 activityList[x] = " " + subject
 x += 1 

 document.getElementById("List").innerHTML = activityList
}


function addBreak(){

  time = Number(window.prompt("How many minutes would you the break to be?"));

  activityList[x] = " Break";
  timeList[x] = time;

  x += 1;
  document.getElementById("List").innerHTML = activityList;
}



function startYeet(){
  var timeout = timeList[y] * 60000;
  var minutes = timeList[y] - 1 ;
  var seconds = 59;
  if (seconds === 0) {
    var seconds = 59
    var minutes = minutes - 1
  }
  console.log(minutes);
  console.log(timeout);

  var big = setInterval(function(){seconds -= 1; document.getElementById("timeHeading").innerHTML = minutes + ":" + seconds; }, 1000 ) 
   document.getElementById("activity").innerHTML = "Current Activity: " + activityList[y];

   setTimeout(function(){ clearInterval(big); 
    playAlarm(); window.alert(activityList[y] + " Over"); y += 1; startYeet()}, timeout)
   
}

 var c = document.getElementById("alarm");
function playAlarm(){
  c.play();
}
                      

  
  
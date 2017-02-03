var slider = document.getElementById("time_slider");
var time = document.getElementById("time");
var html = document.getElementsByTagName('html')[0];


//1440 = 24 hours

function changeTime(){
  //console.log("time changing");
  var value = slider.value;

  var minute = Math.floor(value%60);
  var hour = Math.floor(value/60);
  var timeString = "";
  if(minute < 10)
  {
    timeString = hour+ ":0"+minute;
  }
  else {
    timeString = hour+ ":"+minute;
  }
  if(hour < 10)
  {
    timeString = "0"+timeString;
  }

  //console.log(timeString);
  changeImage(value);
  time.innerHTML = timeString;
}

function changeImage(moment)
{
  if(moment < 360)
  {
    html.style.background = "black url(../DoomsdayClock/imgs/cavepeople.jpg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
  }else if (moment < 1200) {
    html.style.background = "black url(../DoomsdayClock/imgs/maya_temple.jpeg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
  } else {
    html.style.background = "black url(../DoomsdayClock/imgs/busy_city.jpeg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
  }
}

slider.onmousemove = changeTime;

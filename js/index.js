var slider = document.getElementById("time_slider");
var time = document.getElementById("time");
var html = document.getElementsByTagName('html')[0];

var pal = document.getElementById("paleolithic");
var his = document.getElementById("ancient");
var post = document.getElementById("post");
var renn = document.getElementById("renn");
var disc = document.getElementById("discovery");
var colony = document.getElementById("colony");
var rev = document.getElementById("revolution");
var machine = document.getElementById("war");
var atom = document.getElementById("atomic");
var now = document.getElementById("now");
var end = document.getElementById("end");

function setPal(){
  var moment = 0;
  changeImage(moment);
  slider.value = moment;
}

function setHis(){
  var moment = 1009;
  changeImage(moment);
  slider.value = moment;
}

function setPost(){
  var moment = 1321;
  changeImage(moment);
  slider.value = moment;
}

function setRenn(){
  var moment = 1376;
  changeImage(moment);
  slider.value = moment;
}

function setDisc(){
  var moment = 1396;
  changeImage(moment);
  slider.value = moment;
}

function setColon(){
  var moment = 1416;
  changeImage(moment);
  slider.value = moment;
}

function setRev(){
  var moment = 1422;
  changeImage(moment);
  slider.value = moment;
}

function setMach(){
  var moment = 1428;
  changeImage(moment);
  slider.value = moment;
}

function setAtom(){
  var moment = 1432;
  changeImage(moment);
  slider.value = moment;
}

function setNow(){
  var moment = 1437;
  changeImage(moment);
  slider.value = moment;
}

function setEnd(){
  var moment = 1440;
  changeImage(moment);
  slider.value = moment;
}

//1440 = 24 hours

function changeTime(){
  //console.log("time changing");
  var value = slider.value;

  //console.log(timeString);
  setTime(value);
  changeImage(value);
}

function setTime(value){
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

  time.innerHTML = timeString;
}

function changeImage(moment)
{
  if(moment < 1008)//paleolithic
  {
    html.style.background = "black url(../DoomsdayClock/imgs/cavepeople.jpg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);
  }else if (moment < 1320) {//ancient history
    html.style.background = "black url(../DoomsdayClock/imgs/egypt.jpg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);
  }else if (moment < 1375) {//post-classical
    html.style.background = "black url(../DoomsdayClock/imgs/middle_ages_art.jpeg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);
  }else if (moment < 1395) {//renaisance
    html.style.background = "black url(../DoomsdayClock/imgs/Renaissance.jpg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);
  }else if (moment < 1415) {//Age of Discovery
    html.style.background = "black url(../DoomsdayClock/imgs/Columbus.jpeg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);
  }else if (moment < 1421) {//Age of Imperialism
    html.style.background = "black url(../DoomsdayClock/imgs/George_III.jpg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);
  }else if (moment < 1427) {//Age of Revolutions
    html.style.background = "black url(../DoomsdayClock/imgs/FrenchRev.jpg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);
  }else if (moment < 1431) {//Machine Age
    html.style.background = "black url(../DoomsdayClock/imgs/ww1.jpeg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);
  }else if (moment < 1436) {//Atomic Age
    html.style.background = "black url(../DoomsdayClock/imgs/FatMan.jpg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);
  }else if (moment < 1439) {//Now
    html.style.background = "black url(../DoomsdayClock/imgs/busy_city.jpeg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);
  }else {//Midnight
    html.style.background = "black url(../DoomsdayClock/imgs/Extinction.jpg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);

  }
}

slider.onmousemove = changeTime;
pal.onclick = setPal;
his.onclick = setHis;
post.onclick = setPost;
renn.onclick = setRenn;
disc.onclick = setDisc;
colony.onclick = setColon;
rev.onclick = setRev;
machine.onclick = setMach;
atom.onclick = setAtom;
now.onclick = setNow;
end.onclick = setEnd;

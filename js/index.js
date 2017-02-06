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

var text = document.getElementById("text");

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
    var timeString = 'The Paleolithic Era (also known as the Stone Age) started from the first emergence of humans and ended about 3,000 B.C.E. when civilizations started to create'
    + ' written languages. During this period Humans began to develop stone tools, and mostly roamed in packs as nomads hunting and gathering food as they went. This'
    + ' was also the time when humans began to travel all across the world, originating in Africa and spreading from there. Much of what is known of this period is'
    + ' from archeological finds since there was not written history. The emergence of civilizations brought on the development of better techniques to forge metal'
    + ' tools and weaponry, thus ending the utility of Stone tools and ushering the beginning of Ancient History, the Bronze Age.';

    text.innerHTML = timeString;

  }else if (moment < 1320) {//ancient history
    html.style.background = "black url(../DoomsdayClock/imgs/egypt.jpg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);

    var timeString = 'The Ancient History period begins with the emergence of the first civilizations. This era includes the rise and fall of the Ancient Egyptians, the Roman'
    +' Empire, and the Shang Dynasty. This was the first time in human history when humans no longer had the need to travel and instead lived in one place, learned'
    +' trades. Christianity and, arguably, Islam was established during this period of humanity. This period has been considered to be a foundation of our civilization'
    +' today. Historians have assigned the fall of the Roman empire, around 476 C.E., to mark the rough end of this period.';

    text.innerHTML = timeString;
  }else if (moment < 1375) {//post-classical
    html.style.background = "black url(../DoomsdayClock/imgs/middle_ages_art.jpeg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);

    var timeString = "The Post-Classical period is known by different names in different continents. In Europe, this period brought upon the Middle Ages, which brought upon the Black"
    +" Plague and the death of 30% of Europe's population. During this time Buddhism also experience rapid spreading throughout much of China and many parts of Asia."
    +" This period saw much of the expansion of the major world religions through much parts of Europe and the Middle East. The spread of these religions also saw the"
    +" beginning of the Crusades. The end of this period is arguable considered to be the beginning of the Renaissance which changed the whole world.";

    text.innerHTML = timeString;
  }else if (moment < 1395) {//renaisance
    html.style.background = "black url(../DoomsdayClock/imgs/Renaissance.jpg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);

    var timeString = "Beginning in Florence, Italy, the Renaissance was the rediscovery of classical thought. This period is important because it rejuvenated the sciences and arts,"
    +" reshaping Europe's cultural outlook back to a humanist view of the world. The new ideologies are considered essential to our contemporary society.";

    text.innerHTML = timeString;
  }else if (moment < 1415) {//Age of Discovery
    html.style.background = "black url(../DoomsdayClock/imgs/Columbus.jpeg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);

    var timeString = "This period is considered to start around the sailing of Christopher Columbus in 1492 and his discovery of the Americas. This all began due to the typical land"
    +" trading routes becoming blocked. Explorers were then tasked to find a way to India that went West, which led to the misconception when arriving to the Americas"
    +" that the natives were Indians. This launched a massive exploration boom and began the period of colonialism and the major European Empires flourished.";

    text.innerHTML = timeString;
  }else if (moment < 1421) {//Age of Imperialism
    html.style.background = "black url(../DoomsdayClock/imgs/George_III.jpg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);

    var timeString = "This was the beginning of massive expansions. The phrase 'the empire on which the sun never sets' was first used during this period as a reference to the Spanish"
    +" Empire. During this time, much of the world was under European rule. The beginnings of the United States, Mexico, India and  much of South America.";

    text.innerHTML = timeString;
  }else if (moment < 1427) {//Age of Revolutions
    html.style.background = "black url(../DoomsdayClock/imgs/FrenchRev.jpg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";

    var timeString = "This period began with the end of the large European empires as they existed. The American Revolution , the French Revolution, and the Latin American Revolutions are"
    +" just some of the few that happened within this period. There was also a technological revolution known as the Industrial Revolution which literally turned life around."
    +" Population boomed, industry grew, and the world urbanized.";
    text.innerHTML = timeString;
    setTime(moment);
  }else if (moment < 1431) {//Machine Age
    html.style.background = "black url(../DoomsdayClock/imgs/ww1.jpeg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";

    var timeString = "This period was marked with war. Nationalism and imperialism led to the start of the World Wars. Happening after the Industrial Revolution countries had weaponry like"
    + " the world had never seen. The world would never be the same once we gained the ability to mass produce machines. The first planes started to pop up along with the"
    +" beginnings of the automotive industry revolutionized the way we moved and the world became 'smaller'.";
    text.innerHTML = timeString;


    setTime(moment);
  }else if (moment < 1436) {//Atomic Age
    html.style.background = "black url(../DoomsdayClock/imgs/FatMan.jpg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);

    var timeString = "The Atomic Age was marked by the invention of weapons of mass destruction. The Fat Man, one of the atomic bombs used during this period can be seen as the background."
    +" The world was on edge throughout this period; the Cold War made things seem like they could end at any moment. The fear of nuclear death was not the only problem but"
    +" the constant struggle between Capitalism and Communism led the world to the brink of war and created the world we live in now.";

    text.innerHTML = timeString;


  }else if (moment < 1439) {//Now
    html.style.background = "black url(../DoomsdayClock/imgs/busy_city.jpeg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);

    var timeString = "In our present day we are living in a world immersed in technology and advances that for the majority of human history has never existed. We as a species are growing"
    +" faster than ever and in fact we have reached an expansion that is completely unprecedented. This technology we have today has made the world ever smaller. Despite this"
    +" it still seems as if though we are ever farther away. With the recent rise in nationalism and ignorance of the world around us, recent news has put us at 2 minutes before"
    +" the strike of midnight - the end of the human race.";
    text.innerHTML = timeString;

  }else {//Midnight
    html.style.background = "black url(../DoomsdayClock/imgs/Extinction.jpg) no-repeat center center fixed";
    html.style.backgroundSize = "cover";
    setTime(moment);

    var timeString = "This is the end of humanity as we know it. We won't know what does it until it comes, but I hope - we hope - that this time will not come soon. The end of Humanity will"
    +" leave behind the entire idea of us of who we are and who we could have been. The end.";
    text.innerHTML = timeString;

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

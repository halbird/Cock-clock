/*START
INPUT time
STORE time AS what time it is
STORE noon AS 12
STORE evening as 18
IF time IS LESS THAN noon THEN
OUTPUT “Good morning!”
ELSE IF time IS GREATER THAN evening THEN
OUTPUT “Good evening!”
ELSE
OUTPUT “Good afternoon!”
STOP*/

// variables not used right now
var noon = 16;
var evening = 20;

// TIME VARIABLES
var time = new Date().getHours();
var partyTime;
var wakeUpTime;
var lunchTime;
var napTime;

// BASIC CLOCK VARIABLES
var messageText;
var timeEventJS = document.getElementById("timeEvent");
var lolcatJS = document.getElementById("lolcat");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

// EVENT VARIABLES
var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

// everything that updates per second

var updateClock = function()
{
// display depending on time
  
  if (time == partyTime) 
  {
    messageText = "It's party time!";
    image = "https://quackrox.files.wordpress.com/2014/06/party-chicken.jpg";
  }
  else if (time == wakeUpTime) 
  {
    messageText = "Time to wake up!";
    image = "https://static.agcanada.com/wp-content/uploads/sites/3/2014/09/rooster-dv455054-Thinkstock-RGB.jpg";
  }
  else if (time == lunchTime) 
  {
    messageText = "It's lunch time.";
    image = "http://4.bp.blogspot.com/-EO6IR7xA-no/Tt5HK5EPQqI/AAAAAAAAACo/uCba7MMZosA/s1600/Chickens_eating.jpg";
  }
  else if (time == napTime) 
  {
    messageText = "It's nap time!";
    image = "http://www.invsoc.org.nz/wp-content/uploads/2013/03/IMG_9719.jpg";
  }
  else if (time >= 6 && time < 12)
  {
    messageText = "Good Morning!";
    image = "http://i.huffpost.com/gen/1043382/images/o-ROOSTERS-TIME-facebook.jpg";
  }
  else if (time >= 12 && time <= 20)
  {
    messageText = "Good Evening!";
    image = "http://agrodaily.com/wp-content/uploads/2015/11/chicken.jpg";
  }
  else if (time > 20 || time < 2)
  {
    messageText = "It is quite late.";
    image = "http://pop.h-cdn.co/assets/16/11/1458142267-chicken-647226-960-720.jpg";
  }
  else
  {
    messageText = "You should be sleeping!";
    image = "http://www.yourchickens.co.uk/polopoly_fs/1.3520331.1396525128!/image/159246504.jpg_gen/derivatives/landscape_630/159246504.jpg";
  }

// setting messageText and image to what they should be
  timeEventJS.innerText = messageText;
  lolcat.src = image;

// generating the live time and updating it
  var showCurrentTime = function()
  {
    var clock = document.getElementById("clock");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // set am/pm
    if (hours >= 12)
    {
      meridian = "PM";
    }
    
    // set hours
    if (hours > 12)
    {
      hours = hours - 12;
    }

    // set minutes
    if (minutes < 10)
    {
      minutes = "0" + minutes;
    }

    // set seconds
    if (seconds < 10)
    {
      seconds = "0" + seconds;
    }

    // display string of time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    // set this time to the clockTime
    clock.innerText = clockTime;
  }

  //calling function to show the time
  showCurrentTime();
}
//END EVERYTHING THAT UPDATES PER SECOND

// calling function to update everything including text and image depending on time
updateClock();

// updates/calls updateClock every second
var oneSecond = 1000;
setInterval (updateClock, oneSecond);
  

// PARTY BUTTON
var partyEvent = function () {
  
  if (isPartyTime == false) {
    isPartyTime = true;
    time = partyTime;
    partyTimeButton.innerText = "Party Time!!";
    partyTimeButton.style.backgroundColor = "#ff0000";
  }
  
  else {
    isPartyTime = false;
    time = new Date().getHours();
    partyTimeButton.innerText = "Party Over.";
    partyTimeButton.style.backgroundColor = "#0A8DAB";
  }
};

partyTimeButton.addEventListener("click", partyEvent);
// END PARTY BUTTON

// WAKE UP SELECTOR
var wakeUpEvent = function () {
  wakeUpTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
//END WAKE UP SELECTOR

// LUNCH TIME SELECTOR
var lunchEvent = function () {
  lunchTime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);
//END LUNCH TIME SELECTOR

// NAP TIME SELECTOR
var napEvent = function () {
  napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
//END NAP TIME SELECTOR
  
  
  
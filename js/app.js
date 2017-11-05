/*
* Basic Count Up from Date and Time
* Author: @mrwigster / trulycode.com
*/
window.onload=function() {
  upTimeJordis('oct,16,2017,23:00:00');
  upTimeGovern('nov,2,2017,19:00:00');
}

function upTimeJordis(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (mins < 10) {
    mins = '0' + mins;
  }

  if (secs < 10) {
    secs = '0' + secs;
  }

  document.getElementById('diesJordis').firstChild.nodeValue = days;
  document.getElementById('horesJordis').firstChild.nodeValue = hours;
  document.getElementById('minutsJordis').firstChild.nodeValue = mins;
  document.getElementById('segonsJordis').firstChild.nodeValue = secs;

  clearTimeout(upTimeJordis.to);
  upTimeJordis.to=setTimeout(function(){ upTimeJordis(countTo); },1000);
}

function upTimeGovern(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (mins < 10) {
    mins = '0' + mins;
  }

  if (secs < 10) {
    secs = '0' + secs;
  }

  document.getElementById('diesGovern').firstChild.nodeValue = days;
  document.getElementById('horesGovern').firstChild.nodeValue = hours;
  document.getElementById('minutsGovern').firstChild.nodeValue = mins;
  document.getElementById('segonsGovern').firstChild.nodeValue = secs;

  clearTimeout(upTimeGovern.to);
  upTimeGovern.to=setTimeout(function(){ upTimeGovern(countTo); },1000);
}

$(function(){
    $('.carousel').carousel({
      interval: 6000,
      wrap: true
    });
});
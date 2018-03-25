/*
* Basic Count Up from Date and Time
* Author: @mrwigster / trulycode.com
*/
window.onload=function() {
  upTimeJordis('oct,16,2017,05:00:00');
  upTimeFornJunqueras('nov,2,2017,05:00:00');
  upTimeBassaTurullRomevaRull('mar,23,2018,05:00:00');
  upTimeForcadell('mar,23,2018,05:00:00');
}

function upTimeJordis(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1);

  document.getElementById('diesJordis').firstChild.nodeValue = days;

  clearTimeout(upTimeJordis.to);
  upTimeJordis.to=setTimeout(function(){ upTimeJordis(countTo); },1000);
}

function upTimeFornJunqueras(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1);

  document.getElementById('diesFornJunqueras').firstChild.nodeValue = days;

  clearTimeout(upTimeFornJunqueras.to);
  upTimeFornJunqueras.to=setTimeout(function(){ upTimeFornJunqueras(countTo); },1000);
}

function upTimeBassaTurullRomevaRull(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1) + 33;

  document.getElementById('diesBassaTurullRomevaRull').firstChild.nodeValue = days;

  clearTimeout(upTimeBassaTurullRomevaRull.to);
  upTimeBassaTurullRomevaRull.to=setTimeout(function(){ upTimeBassaTurullRomevaRull(countTo); },1000);
}

function upTimeForcadell(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1) + 1;

  document.getElementById('diesForcadell').firstChild.nodeValue = days;

  clearTimeout(upTimeForcadell.to);
  upTimeForcadell.to=setTimeout(function(){ upTimeForcadell(countTo); },1000);
}

$(function(){
    $('.carousel').carousel({
      interval: 6000,
      wrap: true
    });
});

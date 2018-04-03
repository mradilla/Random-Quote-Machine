$(document).ready(function() {
    getQuote();
    $("#boton").on("click",function(e){
    getQuote();
    });
});

function getQuote(){  
$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(a) {
$("#quote").fadeOut('medium', function() {
  $("#quote").html("<p>"+a.quoteText+ "</p><p align='right' class='autor'>&mdash; " + a.quoteAuthor + "</p>");
  $("body").css({'background-color': getColor()});
 
  var button = document.createElement('a');
  button.classList += "twitter-share-button";
  button.innerHTML = "Tweet";
  button.setAttribute("data-text", '"'+a.quoteText+'" - '+a.quoteAuthor+".");
  button.setAttribute("data-via", "mradilla_");
  button.setAttribute("data-size", "large");
  button.setAttribute("data-hashtags", "freeCodeCamp, 100DaysOfCode");
  button.setAttribute("href", "https://twitter.com/intent/tweet");
  $("#t-boton").html(button);
  twttr.widgets.load();
  $("#quote").animate({opacity: 'toggle'});
   });  
 });
}       

function getColor(){
  return colors[Math.floor(Math.random() * 11)];
}
var colors=[
"#FFC8C8",	"#F4CAD6"	,"#FFA8FF",	"#EFCDF8",	"#C6C6FF",	"#C0E7F3",	"#DCEDEA",
"#F1F1D6",	"#F5EFE0",	"#F2E4D5",	"#F5E7E2",	"#F0DDD5",	"#F5E8E2"	,"#F3E7E7",
"#F9F9DD",	"#FFF9CE",	"#FFF5D7",	"#FFF2D2",	"#FFF2D9",	"#FFEBD9"	,"#FFE6D0",
"#E3FBE9",	"#E9F1EA",	"#EAFEE2",	"#D2FFC4",	"#E8FFD9",	"#FFFFD7"	,"#FAFBDF",
"#E1E1FF",	"#DBEBFF",	"#ECFAFF",	"#C0F7FE",	"#E1FFFE",	"#BDFFEA"	,"#EAFFEF",
"#FFDFFF",	"#F4D2F4",	"#EFD7FF",	"#EDDFFB",	"#E3E0FA",	"#E0EAF8"	,"#C9EAF3",
"#FFDFDF",	"#FFDFF8", "#FFDFEF", "#FFDBFB",	"#F9D9FF",	"#F4DCFE"	,"#E6DBFF"
 ];

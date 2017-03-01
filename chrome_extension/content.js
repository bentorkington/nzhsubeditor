
// fix whitespace between author's name and apostrophe
// add "Fuck [author's] opinion"

var author = document.getElementsByClassName("authorName")[0].innerHTML;
var regex = /([A-Za-z ]+[a-z])\s+'(s?) Opinion/;
var newauthor = author.replace(regex, "Fuck $1'$2 Opinion");
document.getElementsByClassName("authorName")[0].innerHTML = newauthor;




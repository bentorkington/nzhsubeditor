var author = document.getElementsByClassName("authorName")[0].innerHTML;

var regex = /([A-Za-z ]+[a-z])\s+'s Opinion/;

var newauthor = author.replace(regex, "Fuck $1's Opinion");

document.getElementsByClassName("authorName")[0].innerHTML = newauthor;



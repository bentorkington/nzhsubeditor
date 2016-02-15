var author = document.getElementsByClassName("authorName")[0].innerHTML;

var regex = /(\w+\s\w+)\s+'s Opinion/;

var newauthor = author.replace(regex, "Fuck $1's Opinion");

document.getElementsByClassName("authorName")[0].innerHTML = newauthor;



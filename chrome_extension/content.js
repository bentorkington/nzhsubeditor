// give the Herald a motto: Better than Stuff on most days! Stand proud!

var taglines = [
    "Better than Stuff on most days",
    "We didn't want to merge anyway",
];

var mottoId = Math.trunc((new Date().getTime() / (3600 * 1000)) % taglines.length);

var motto = document.createElement("div");
var mottoText = document.createElement("em");
var mottoNode = document.createTextNode(taglines[mottoId]);

mottoText.appendChild(mottoNode);
motto.appendChild(mottoText);
motto.setAttribute("style", "position: relative; bottom: 12px; left: 65px; margin-bottom:-15px; color: white; font-size: 1.1em; font-family: 'Stag-Serif-Book',Calibri,Candara,Segoe,'Segoe UI',Optima,Arial,sans-serif;");

var logoElement = document.getElementById("logo");
logoElement.appendChild(motto);


// fix whitespace between author's name and apostrophe
// add "Fuck [author's] opinion"

if (document.getElementsByClassName("authorName").length > 0) {
    var author = document.getElementsByClassName("authorName")[0].children[0].innerHTML;

    var regex = /\n(.*)\s\n'(s?) Opinion/;

    // Toby is aight
    if (/\n\s*Toby Manhire.*/.test(author)) {
        document.getElementsByClassName("authorName")[0].children[0].innerHTML =
            author.replace(/\s*\n\s*'s Opinion/, "'s Opinion");
    } 
    else {
        var newauthor = author.replace(regex, "Fuck $1'$2 Opinion");
        document.getElementsByClassName("authorName")[0].children[0].innerHTML = newauthor;
    }
}

var paras = document.getElementsByTagName("p");
for (var i = 0; i < paras.length; ++i) {
    p.innerText.replace(/([tT])he (<i>)?Herald(<\/i>)?/, "$1" + "eh " + "$2" + "Herald" + "$3");
}

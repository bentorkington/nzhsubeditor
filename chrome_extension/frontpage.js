function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function findHeading(search) {
var found;
var headings = document.getElementsByTagName("h2");

for (var i=0; i < headings.length; i++)
{
    if (headings[i].textContent == search) {
        found = headings[i];
        return found;
    }
}    
}

var motto = document.createElement("div");
var mottoText = document.createElement("em");
var mottoNode = document.createTextNode("Better than Stuff on most days");

mottoText.appendChild(mottoNode);
motto.appendChild(mottoText);
motto.setAttribute("style", "position: relative; bottom: 12px; left: 65px; margin-bottom:-15px; color: white; font-size: 1.1em; font-family: 'Stag-Serif-Book',Calibri,Candara,Segoe,'Segoe UI',Optima,Arial,sans-serif;");

var logoElement = document.getElementById("logo");
logoElement.appendChild(motto);

var depthHeader = findHeading("Herald in-depth ");

depth = document.createElement("p");
depthText = document.createTextNode("We'd hoped these three day old stories had got more clicks");
depth.setAttribute("class", "articleCopy");
depth.appendChild(depthText);

insertAfter(depth, depthHeader);

var doMiss = findHeading("Don't miss ");
doMiss.innerHTML = "Do miss ";

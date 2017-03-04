function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function findHeading(search) {
    var found;
    var headings = document.getElementsByTagName("h2");

    for (var i=0; i < headings.length; i++) {
        if (headings[i].textContent == search) {
            found = headings[i];
            return found;
        }
    }    
}

function replaceHeading(from, to) {
    var element = findHeading(from);
    element.innerHTML = to;
}

var depthHeader = findHeading("Herald in-depth ");

depth = document.createElement("p");
depthText = document.createTextNode("We'd hoped these three day old stories had got more clicks");
depth.setAttribute("class", "articleCopy");
depth.appendChild(depthText);

insertAfter(depth, depthHeader);

replaceHeading("Don't miss ", "Do miss");
replaceHeading("Must read ", "Mustn't read")


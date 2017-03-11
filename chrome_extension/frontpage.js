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

replaceHeading("Don't miss ", "Do miss");
replaceHeading("Must read ", "Mustn't read")

var allContent = document.getElementById("contentWrapper");
for (var i = 0; i<allContent.children.length; i++) {
    var div = allContent.children[i];
    div.innerHTML = div.innerHTML.replace(/([tT])he Herald/, "$1" + "eh Herald");
}

